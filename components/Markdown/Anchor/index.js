export default function Anchor({ href, children }) {
  return (
    <a
      className="text-indigo-600 border-b-2 border-indigo-400 border-dotted font-bold hover:text-indigo-400 hover:border-indigo-600 transition-colors"
      href={href}
      target="_blank"
      rel="noreferrer noopenner"
    >
      {children}
    </a>
  );
}
