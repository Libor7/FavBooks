"use client";

import { useEffect, useState } from "react";

import { DEFAULT_DELAY_MS } from "@/shared/constants/debounce.constants";

export const useDebouncedValue = <T>(value: T, delayMs = DEFAULT_DELAY_MS) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(timeoutId);
  }, [value, delayMs]);

  return debouncedValue;
};
