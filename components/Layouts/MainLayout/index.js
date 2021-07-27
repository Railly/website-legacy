export default function MainLayout({ children }) {
  return (
    <main className="antialiased dark:bg-gray-800">
      <article className="text-gray-900 dark:text-gray-200">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row">
          {children}
        </div>
      </article>
    </main>
  );
}
