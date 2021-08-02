export default function TableCell({ bold, children }) {
  return bold ? (
    <div className="w-20 sm:w-24 font-bold">{children}</div>
  ) : (
    <div className="w-20 sm:w-24">{children}</div>
  );
}
