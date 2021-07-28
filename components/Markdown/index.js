import Button from "components/Button";
import Anchor from "./Anchor";
import Heading from "./Heading";
import ImageMd from "./Image";
import List from "./List";
import Code from "./Pre";
import Quote from "./Quote";
import Strong from "./Strong";
import Text from "./Text";

export const components = {
  Button,
  Image: ImageMd,
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
  blockquote: Quote,
};
