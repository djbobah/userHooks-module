import { useReducer } from "react";

const reducer = (state, values) => {
  return (action) => {
    if (action.type === "SET") return action.value;
  };

  // return values;
};

export const useToggle = (values) => {
  const { value, dispatch } = useReducer(reducer(value, values), "qqq");

  const toggle = (value) => {
    // console.log(value);
    if (value !== undefined) {
      dispatch({ type: "SET", value });
    } else {
      dispatch({ type: "TOGGLE" });
    }
  };

  return [value, toggle];
};
