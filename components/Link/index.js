import Link from "next/link";

export function StyledLink({ to, uppercase, children, external }) {
  console.log();
  return (
    <>
      {external ? (
        <a
          href={to}
          className="font-medium hover:text-indigo-400 dark:hover:text-green-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link href={to}>
          <a
            className={`font-medium hover:text-indigo-500 dark:hover:text-green-500 transition-colors ${
              uppercase && "uppercase"
            }`}
          >
            {children}
          </a>
        </Link>
      )}
    </>
  );
}
