"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FontSizeContextType {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

const MIN_FONT_SIZE = 0.8;
const MAX_FONT_SIZE = 1.5;
const DEFAULT_FONT_SIZE = 1.0;
const FONT_SIZE_STEP = 0.1;
const STORAGE_KEY = "hospital-font-size";

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<number>(DEFAULT_FONT_SIZE);

  // Load font size from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem(STORAGE_KEY);
    if (savedFontSize) {
      const parsed = parseFloat(savedFontSize);
      if (!isNaN(parsed) && parsed >= MIN_FONT_SIZE && parsed <= MAX_FONT_SIZE) {
        setFontSize(parsed);
      }
    }
  }, []);

  // Apply font size to document root whenever it changes
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-multiplier', fontSize.toString());
    localStorage.setItem(STORAGE_KEY, fontSize.toString());
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize((prev) => {
      const newSize = Math.min(prev + FONT_SIZE_STEP, MAX_FONT_SIZE);
      return Math.round(newSize * 10) / 10; // Round to 1 decimal place
    });
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => {
      const newSize = Math.max(prev - FONT_SIZE_STEP, MIN_FONT_SIZE);
      return Math.round(newSize * 10) / 10; // Round to 1 decimal place
    });
  };

  const resetFontSize = () => {
    setFontSize(DEFAULT_FONT_SIZE);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, resetFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
}

export { MIN_FONT_SIZE, MAX_FONT_SIZE, DEFAULT_FONT_SIZE };
