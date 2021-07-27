import BlogPreview from "components/BlogPreview";
import Heading from "components/Markdown/Heading";
import { getAllPostsMeta } from "lib/mdx";

export const getStaticProps = async () => {
  const posts = getAllPostsMeta("_posts");
  return { props: { posts } };
};

export default function Blog({ posts }) {
  return (
    <div className="container max-w-3xl px-4 mx-auto text-gray-900">
      <Heading.H1>Blog</Heading.H1>
      <Heading.H2>Publicaciones recientes</Heading.H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        {posts.map((post) => (
          <BlogPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
