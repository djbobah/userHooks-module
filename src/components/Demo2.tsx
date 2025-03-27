import { useLocalStorage } from "../hooks/useLocaleStorage";

export function Demo2() {
  const [value, { setItem, removeItem }] = useLocalStorage("some-key");

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem("new storage value")}>
          Задать значение
        </button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}
