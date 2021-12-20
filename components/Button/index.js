import Link from "next/link";

export default function Button({ children, type, to }) {
  return (
    <Link href={to}>
      <a>
        {type === "primary" ? (
          <button className="px-4 py-2 font-bold text-white bg-indigo-500 rounded shadow-lg hover:bg-indigo-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:mr-8 w-36 shadow-indigo-500/60 dark:shadow-blue-500/40">
            {children}
          </button>
        ) : (
          <button className="px-4 py-2 font-bold bg-gray-200 rounded shadow-lg hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 w-36 shadow-gray-300/80 dark:shadow-gray-500/40">
            {children}
          </button>
        )}
      </a>
    </Link>
  );
}
