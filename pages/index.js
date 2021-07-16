import Head from "next/head";

export default function Home() {
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
          <p className="mt- ">
            Disfruto solucionar problemas, diseñar productos y sobre todo
            compartir mis conocimientos.
          </p>
          <p className="mt-2">
            Estoy activo en Twitter, quizá hayan cosas que te interese.
          </p>
        </div>
      </main>
    </>
  );
}
