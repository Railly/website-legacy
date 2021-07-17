import { getAllPostsMeta } from "lib/mdx";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = getAllPostsMeta();
  return { props: { posts } };
};

export default function Home({ posts }) {
  return (
    <>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="px-4 mx-auto text-gray-900">
          <h1 className="text-2xl font-bold lg:text-4xl">
            Hola, soy Railly Hugo.
          </h1>
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
        <div className="grid grid-cols-2 gap-10 mt-6">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className="text-gray-800 rounded-md p-3 group block hover:text-blue-500  hover:bg-gray-100 transition-colors">
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
                  <h2 className="text-lg font-bold group-hover:text-sky-500">
                    {post.title}
                  </h2>
                  <p className="text-gray-800 line-clamp-2">
                    {post.description}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
