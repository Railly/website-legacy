const H1 = ({ children }) => (
  <h1 className="text-2xl font-bold lg:text-4xl mb-3 mt-8">{children}</h1>
);

const H2 = ({ children }) => (
  <h2 className="text-2xl font-bold lg:text-2xl mb-3 mt-8">{children}</h2>
);

const H3 = ({ children }) => (
  <h3 className="text-2xl font-bold lg:text-xl mb-3 mt-8">{children}</h3>
);

const Heading = { H1, H2, H3 };

export default Heading;
