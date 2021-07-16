export default function MainLayout({ children }) {
  return (
    <main className="container max-w-3xl mx-auto mt-16 antialiased">
      <article className="px-4 mx-auto text-gray-900">{children}</article>
    </main>
  );
}
