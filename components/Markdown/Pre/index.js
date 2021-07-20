import Highlight, { defaultProps } from "prism-react-renderer";

import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import { useEffect, useState } from "react";

export default function Code({ children }) {
  const [darkMode, setDarkMode] = useState(undefined);
  useEffect(() => {
    setDarkMode(localStorage.theme === "dark" ? true : false);
  });
  return (
    <Highlight
      {...defaultProps}
      theme={darkMode ? darkTheme : lightTheme}
      code={children.trim()}
      language={"jsx"}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className="overflow-x-auto my-10 p-5 w-full text-xs sm:text-base font-bold opacity-80 bg-gray-100 dark:bg-gray-900 ">
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
