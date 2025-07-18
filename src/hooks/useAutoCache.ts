import { useState, useEffect } from 'react';

const SESSION_SUFFIX = '_session';
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in ms

function getSavedValue<T>(key: string, initialValue: T): T {
  if (typeof window === 'undefined') return initialValue;
  // Check session cache
  const sessionRaw = localStorage.getItem(key + SESSION_SUFFIX);
  if (sessionRaw) {
    try {
      const { value, timestamp } = JSON.parse(sessionRaw);
      if (Date.now() - timestamp < SESSION_DURATION) {
        return value;
      } else {
        localStorage.removeItem(key + SESSION_SUFFIX);
      }
    } catch {}
  }
  // Fallback to permanent cache
  const local = localStorage.getItem(key);
  if (local !== null) return JSON.parse(local);
  return initialValue;
}

export function useAutoCache<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => getSavedValue(key, initialValue));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Save permanent cache
    localStorage.setItem(key, JSON.stringify(value));
    // Save session cache with timestamp
    localStorage.setItem(
      key + SESSION_SUFFIX,
      JSON.stringify({ value, timestamp: Date.now() })
    );
  }, [key, value]);

  return [value, setValue];
} 