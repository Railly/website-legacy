import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import gfmPlugin from "remark-gfm";
import slugPlugin from "remark-slug";
import fs from "fs";
import path from "path";
import glob from "glob";

if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

const ROOT_PATH = process.cwd();

export const getAllPostsMeta = (folder) => {
  const POSTS_PATH = path.join(ROOT_PATH, folder);
  const PATH = path.join(POSTS_PATH);

  // Get all file paths in the posts folder (that end with .mdx)
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return (
    paths
      .map((filePath) => {
        // Get the content of the file
        const source = fs.readFileSync(path.join(filePath), "utf8");

        // Get the file name without .mdx
        const slug = path.basename(filePath).replace(".mdx", "");
        // Use gray-matter to extract the post meta from post content
        const data = matter(source).data;

        return {
          ...data,
          slug,
        };
      })
      // filter post by category if specified
      //      .filter((post) => {
      //// default to all posts
      //if (!category) return true;

      //return post.category === category;
      //})

      // Sort posts by published date
      .sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
      )
  );
};

// Get content of specific post
export const getPostBySlug = async (slug, folder) => {
  // Get the content of the file
  const POSTS_PATH = path.join(ROOT_PATH, folder);
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), "utf8");

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        slugPlugin,
        gfmPlugin,
      ];

      return options;
    },
  });

  const meta = {
    ...frontmatter,
    slug,
  };

  return {
    meta,
    code,
  };
};
