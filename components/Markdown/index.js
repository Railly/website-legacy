import Anchor from "./Anchor";
import Heading from "./Heading";
import List from "./List";
import Code from "./Pre";
import Strong from "./Strong";
import Text from "./Text";
import Github from "components/Icons/Github";

export const components = {
  Github,
  a: Anchor,
  code: Code,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Text,
  ul: List.Ul,
  ol: List.Ol,
  li: List.Li,
  strong: Strong,
};
