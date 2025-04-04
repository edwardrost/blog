"use client";

import { useBoundStore } from '@/store/bound-store';
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useBoundStore();
  const { setTheme: setNextTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setNextTheme(newTheme);
  };

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme} >
      { theme === "light"
        ? <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
        : <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/> }
    </Button>
  )
};