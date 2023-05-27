import React from "react";
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
  const [ theme, setTheme ] = React.useState<Theme>(defaultTheme);

  console.log('theme', theme)

  const defaultProps = React.useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}