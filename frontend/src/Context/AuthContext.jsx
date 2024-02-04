import {createContext, useReducer} from 'react';

const initialState = {
      isAuth :false,
      role :"",
      token : ""
}
// console.log(initialState)
export const authContext = createContext(initialState);

const authReducer = (state,action) => {
      switch(action.type) {
            case 'LOGIN_START' : return {
                  isAuth : false,
                  role : "",
                  token : ""
            };
            case 'LOGIN_SUCCESS' : return {
                  isAuth : true,
                  role : action.payload.role,
                  token : action.payload.token
            };
            case 'LOGIN_OUT' : return {
                  isAuth : false,
                  role : "",
                  token : ""
            };
            default : return state
      }
}

export const AuthContextProvider = ({children}) => {
      const [state, dispatch] = useReducer(authReducer, initialState);

      return (
      <authContext.Provider value={{
            isAuth : state?.isAuth,
            token : state?.token, 
            role : state?.role,
            dispatch : dispatch
            }}>
            {children}
      </authContext.Provider>
      )
}