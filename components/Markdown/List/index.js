const Ol = ({ children }) => <ol className="mb-6">{children}</ol>;

const Ul = ({ children }) => <ul className="mb-6">{children}</ul>;

const Li = ({ children }) => {
  return (
    <>
      <li className="my-3">{children}</li>
      <style jsx>{`
        li::before {
          padding-right: 1em;
          content: "•";
          color: #d1d5db;
        }
      `}</style>
    </>
  );
};

const List = { Ol, Ul, Li };

export default List;
