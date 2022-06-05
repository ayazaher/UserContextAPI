import { createContext, useState, useReducer } from "react";
import { usersReducer } from "../Reducers/users-reducer";
import rootReducer from '../Reducers'
export const usersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    users: {
      list: [],
      details: null,
      search: [],
    }
  });
  return (
    <usersContext.Provider value={{ state, dispatch }}>
      {children}
    </usersContext.Provider>
  );
};
