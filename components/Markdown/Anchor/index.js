export default function Anchor({ href, children }) {
  return (
    <a
      className="text-blue-400 border-b-2 border-blue-400 border-dotted font-medium hover:text-blue-600 hover:border-blue-600 transition-colors"
      href={href}
      target="_blank"
      rel="noreferrer noopenner"
    >
      {children}
    </a>
  );
}
