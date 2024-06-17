import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface CompilertSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilertSliceStateType = {
  fullCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- External CSS files -->
    <link rel="stylesheet" href="styles.css">
    <!-- External JavaScript files -->
    <script src="script.js" defer></script>
</head>
<body>
    <!-- Your content goes here -->
    <h1>Hello, World!</h1>
</body>
</html>
`,
    css: "h1",
    javascript: "console.log();",
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilertSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
        // state.fullCode[state.currentLanguage] = action.payload;
        state.fullCode[state.currentLanguage] = action.payload
    },
    updateFullCode:(state, action:PayloadAction<CompilertSliceStateType["fullCode"]>) => {
        state.fullCode = action.payload;
    }
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } =
  compilerSlice.actions;
