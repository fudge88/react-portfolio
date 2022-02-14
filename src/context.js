import { createContext, useReducer } from "react";

export const modeContext = createContext();

const INITIAL_STATE = { darkMode: false };

const modeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ModeProvider = (props) => {
  const [state, dispatch] = useReducer(modeReducer, INITIAL_STATE);
  return (
    <modeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </modeContext.Provider>
  );
};
