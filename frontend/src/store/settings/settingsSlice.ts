import { createSlice } from '@reduxjs/toolkit'

const THEME_IS_DARK = localStorage.getItem("THEME_IS_DARK");
const LANGUAGE = localStorage.getItem("LANGUAGE")
const PANEL_TRANSPARENCY = localStorage.getItem("PANEL_TRANSPARENCY")

export interface SettingsState {
    themeIsDark: boolean;
    language: string;
    panelTransparency: string;
}

const initialState: SettingsState = {
    themeIsDark: THEME_IS_DARK ? Boolean(THEME_IS_DARK) : false,
    language: LANGUAGE ? LANGUAGE : "Русский",
    panelTransparency: PANEL_TRANSPARENCY ? PANEL_TRANSPARENCY : "transparent",
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme(state) {
            state.themeIsDark = !state.themeIsDark;
            localStorage.setItem("THEME_IS_DARK", String(state.themeIsDark));
        },
        setPanelTransparency(state, action) {
            state.panelTransparency = action.payload;
            localStorage.setItem("PANEL_TRANSPARENCY", state.panelTransparency);
        },
        setLanguage(state, action) {
            state.language = action.payload;
            localStorage.setItem("LANGUAGE", state.language);
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme, setPanelTransparency, setLanguage } = settingsSlice.actions;

export default settingsSlice.reducer