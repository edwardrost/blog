"use client";

import { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useThemeStore } from '@/store/theme-store';  // заменить на слайс из общего стора

export default function ThemeProvider({ children, ...props }) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    setTheme(theme); 
  }, [theme]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};