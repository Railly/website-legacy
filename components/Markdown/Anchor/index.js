export default function Anchor({ href, children }) {
  return (
    <a
      className="text-blue-400 font-medium hover:text-blue-600 transition-colors"
      href={href}
      target="_blank"
      rel="noreferrer noopenner"
    >
      {children}
    </a>
  );
}
