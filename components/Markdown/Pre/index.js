import Highlight, { defaultProps } from "prism-react-renderer";
import lighttheme from "prism-react-renderer/themes/github";
import darktheme from "prism-react-renderer/themes/nightOwl";

export default function Code({ children, darkMode }) {
  return (
    <Highlight
      {...defaultProps}
      theme={darkMode ? darktheme : lighttheme}
      code={children.trim()}
      language={"jsx"}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="text-sm bg-gray-50"
          style={{
            backgroundColor: darkMode ? style.backgroundColor : "",
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
