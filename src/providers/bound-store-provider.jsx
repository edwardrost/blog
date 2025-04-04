"use client";

import { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useBoundStore } from '@/store/bound-store';

export default function BoundStoreProvider({ children, ...props }) {
  const { theme, setTheme } = useBoundStore();

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 