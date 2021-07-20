export default function MainLayout({ children }) {
  return (
    <main className="container max-w-3xl mx-auto antialiased dark:bg-gray-800">
      <article className="px-4 mx-auto text-gray-900 dark:text-gray-200">
        {children}
      </article>
    </main>
  );
}
