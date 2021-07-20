import Heading from "components/Markdown/Heading";
import { getAllPostsMeta } from "lib/mdx";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = getAllPostsMeta();
  return { props: { posts } };
};

export default function Blog({ posts }) {
  return (
    <main className="max-w-4xl mx-auto antialiased">
      <div className="px-4 mx-auto text-gray-900">
        <Heading.H1>Blog</Heading.H1>
        <Heading.H2>Publicaciones recientes</Heading.H2>
        <div className="grid grid-cols-1 gap-10 mt-6">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className="rounded-md p-3 group block hover:text-indigo-500  hover:bg-indigo-50 dark:hover:bg-green-900 dark:text-gray-200 hover:scale-105 transition-transform">
                  <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
                    <Image
                      src={`/${post.image}`}
                      blurDataURL={`/${post.image}`}
                      placeholder="blur"
                      width={1920}
                      height={960}
                      className="align-top"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="line-clamp-2">{post.description}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
