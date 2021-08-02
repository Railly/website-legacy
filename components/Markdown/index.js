import Button from "components/Button";
import Anchor from "./Anchor";
import Heading from "./Heading";
import ImageMd from "./Image";
import List from "./List";
import Code from "./Pre";
import Quote from "./Quote";
import Strong from "./Strong";
import Table from "./Table";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import Text from "./Text";
import Hr from "./Br";

export const components = {
  Anchor,
  Button,
  Image: ImageMd,
  hr: Hr,
  a: Anchor,
  blockquote: Quote,
  code: Code,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  li: List.Li,
  ol: List.Ol,
  p: Text,
  strong: Strong,
  table: Table,
  td: TableCell,
  th: (props) => <TableCell bold {...props} />,
  tr: TableRow,
  ul: List.Ul,
};
