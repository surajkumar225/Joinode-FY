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
    html: "THis is html",
    css: "THis is css",
    javascript: "THis is js",
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
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } =
  compilerSlice.actions;
