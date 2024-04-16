import { createContext } from "react";

// This is like a teleporter
export const CountContext = createContext({
  count,
  setCount,
});
