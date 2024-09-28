import { createSlice } from "@reduxjs/toolkit";

const THEME_IS_DARK = localStorage.getItem("THEME_IS_DARK");
const LANGUAGE = localStorage.getItem("LANGUAGE");

export interface SettingsState {
  themeIsDark: boolean;
  language: string;
}


const initialState: SettingsState = {
  themeIsDark: THEME_IS_DARK === "true" ? true : false,
  language: LANGUAGE ? LANGUAGE : "Русский",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme(state) {
      state.themeIsDark = !state.themeIsDark;
      localStorage.setItem("THEME_IS_DARK", String(state.themeIsDark));
    },
    setLanguage(state, action) {
      state.language = action.payload;
      localStorage.setItem("LANGUAGE", state.language);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme, setLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
