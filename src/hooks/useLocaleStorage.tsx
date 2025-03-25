import { useState } from "react";

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
  const [value, setValue] = useState("");

  const setItem = (value: LocalStorageSetValue) => {
    localStorage.setItem(key, value);
    setValue(value);
  };
  const removeItem = () => {
    localStorage.removeItem(key);
    setValue("");
  };

  return [value, { setItem, removeItem }];
};
