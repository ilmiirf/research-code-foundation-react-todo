import { useState, useEffect } from 'react';

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [value, delay]);

  return debounced;
}

export default useDebounce;
