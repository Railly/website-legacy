import Link from "next/link";

export function StyledLink({ to, uppercase, children, external }) {
  return (
    <>
      {external ? (
        <a
          href={to}
          className="font-medium hover:text-blue-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link href={to}>
          <a
            className={`font-medium hover:text-blue-500 transition-colors ${
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
