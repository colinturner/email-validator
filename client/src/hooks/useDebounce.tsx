import { useState, useEffect } from "react";

// Custom hook for updating a value if a certain amount of "debounce time" has passed.
export default function useDebounce(
  value: string | undefined = "",
  delay: number
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
