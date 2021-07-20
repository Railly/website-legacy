import Heading from "components/Markdown/Heading";
import { getAllPostsMeta } from "lib/mdx";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = getAllPostsMeta();
  return { props: { posts } };
};

export default function About({ posts }) {
  return (
    <>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="px-4 mx-auto text-gray-900 dark:text-gray-200">
          <Heading.H1>Hola, soy Railly Hugo.</Heading.H1>
          <p className="mt-2">
            Bienvenido/a a mi sitio web. Soy un estudiante de Ingeniería de
            Software enfocado en el Desarrollo Web.
          </p>
          <p className="mt-2">
            Disfruto solucionar problemas, diseñar productos y sobre todo
            compartir mis conocimientos.
          </p>
          <p className="mt-2">
            Estoy activo en Twitter, quizá hayan cosas que te interese.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className="rounded-md p-3 group block hover:text-indigo-500  hover:bg-indigo-50 dark:hover:bg-green-900 dark:text-gray-200 hover:scale-105 transition-transform">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
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
      </main>
    </>
  );
}
