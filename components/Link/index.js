import Link from "next/link";

export function StyledLink({ to, children, external }) {
  console.log();
  return (
    <>
      {external ? (
        <a
          href={to}
          className="font-medium transition hover:text-indigo-400 dark:hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link href={to}>
          <a className="font-medium transition hover:text-indigo-500 dark:hover:text-blue-400">
            {children}
          </a>
        </Link>
      )}
    </>
  );
}
