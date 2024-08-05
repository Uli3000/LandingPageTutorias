import { create } from 'zustand'

type ThemeStore = {
  mode: 'light' | 'dark';
  toggleThemeMode: () => void;
};

const systemPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useTheme = create<ThemeStore>((set) => ({
  mode: systemPrefersDarkMode ? 'dark' : 'light',
  toggleThemeMode: () => set((state) => ({
    mode: state.mode === 'light' ? 'dark' : 'light',
  })),
}));
