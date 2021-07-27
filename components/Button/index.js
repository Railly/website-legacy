import Link from "next/link";

export default function Button({ children, type, to }) {
  return (
    <Link href={to}>
      <a>
        {type === "primary" ? (
          <button className="bg-indigo-500 hover:bg-indigo-600 dark:bg-green-600 dark:hover:bg-green-500 sm:mr-8 text-white font-bold w-36 py-2 px-4 rounded transition-colors">
            {children}
          </button>
        ) : (
          <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 font-bold w-36 py-2 px-4 rounded transition-colors">
            {children}
          </button>
        )}
      </a>
    </Link>
  );
}
