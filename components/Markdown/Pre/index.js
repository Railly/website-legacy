import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";

export default function Code({ children }) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={"jsx"}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="pre"
          style={{
            ...style,
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
