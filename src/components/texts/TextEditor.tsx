import React from "react";
import Editor from "rich-markdown-editor";
import light, { dark } from "rich-markdown-editor/dist/theme";

interface Props {
  darkTheme?: boolean;
}

const TextEditor: React.FC<Props> = ({ darkTheme }) => {
  return (
    <Editor
      defaultValue="Hello world!"
      readOnly={false}
      autoFocus
      theme={darkTheme ? dark : light}
      onChange={(e) => console.log(e)}
      // uploadImage={async (file: any) => {
      //   const result = {
      //     url:
      //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F488904%2Fgoog-q2-earnings-goog-stock.png&f=1&nofb=1",
      //   };
      //   return result.url;
      // }}
    />
  );
};

export default TextEditor;
