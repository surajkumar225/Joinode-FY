import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
// import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateCodeValue } from "@/redux/slices/compilerSlice";
// import { abcdefInit } from "@uiw/codemirror-theme-abcdef";
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
// import { updateCSS, updateJS } from "@/redux/slices/compilerSlice";

export default function CodeEditor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
//   const htmlCode = useSelector((state: RootState) => state.compilerSlice.html);
//   const cssCode = useSelector((state: RootState) => state.compilerSlice.css);
//   const javascriptCode = useSelector(
//     (state: RootState) => state.compilerSlice.javascript
//   );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const dispatch = useDispatch();
  // console.log('langNames:', langNames);
//   const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((value: string) => {

    dispatch(updateCodeValue(value));
  }, []);
  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={vscodeDarkInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}
