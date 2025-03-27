import { useCallback, useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Ошибка при чтении из localStorage:", error);
      return null;
    }
  });

  const setItem = useCallback(
    (value: LocalStorageSetValue) => {
      try {
        localStorage.setItem(key, value);
        setValue(value);
      } catch (error) {
        console.error("Ошибка при записи в localStorage", error);
      }
    },
    [key]
  );
  const removeItem = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setValue(null);
    } catch (error) {
      console.error("Ошибка при удалении из localStorage", error);
    }
  }, [key]);

  return [value, { setItem, removeItem }];
};
