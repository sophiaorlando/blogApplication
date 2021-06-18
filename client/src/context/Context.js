import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  //if there is a user in local storage, it takes the users info, otherwise null
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

//once logged in, the information given is spread and used
//throughout the whole application
//also updates the INITIAL_STATE
export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  //saves user info to local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])

  return (
    <Context.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch,
    }}>
      {children}
    </Context.Provider>
  )

}