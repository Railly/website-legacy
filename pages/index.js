import Button from "components/Button";
import Heading from "components/Markdown/Heading";
import { getAllPostsMeta } from "lib/mdx";
import Image from "next/image";

export const getStaticProps = async () => {
  const projects = getAllPostsMeta("_projects");
  return { props: { projects } };
};

export default function Home({ projects }) {
  return (
    <>
      <div className="px-10 text-gray-900 dark:text-gray-200">
        <Heading.H1>Hola, soy Railly Hugo.</Heading.H1>
        <p className="mt-6">
          Bienvenido/a a mi sitio web. Soy un estudiante de Ingeniería de
          Software enfocado en el Desarrollo Web.
        </p>
        <p className="mt-3">
          Disfruto solucionar problemas, diseñar productos y sobre todo
          compartir mis conocimientos.
        </p>
        <p className="mt-3">
          Estoy activo en Twitter, quizá hayan cosas que te interese.
        </p>
        <div className="flex justify-evenly sm:justify-center mt-10">
          <Button to="/projects" type="primary">
            Ver Proyectos
          </Button>
          <Button to="/blog" type="secondary">
            Ir a Blog
          </Button>
        </div>
      </div>
      <div className="w-52 h-52 mt-10">
        <Image
          className="rounded-full"
          blurDataURL="/profile-3.png"
          src="/profile-3.png"
          placeholder="blur"
          width={400}
          height={400}
        />
      </div>
    </>
  );
}
