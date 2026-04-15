// import { createContext, useContext, useReducer, useEffect } from "react";

// const AuthContext = createContext();

// const initialState = {
//   user: null
// };

// function authReducer(state, action) {
//   switch (action.type) {
//     case "LOGIN":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };
//     default:
//       return state;
//   }
// }

// export function AuthProvider({ children }) {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   // ✅ RESTORE AUTH ON LOAD
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       dispatch({
//         type: "LOGIN",
//         payload: JSON.parse(storedUser)
//       });
//     }
//   }, []);

//   const login = (user) => {
//     localStorage.setItem("user", JSON.stringify(user));
//     dispatch({ type: "LOGIN", payload: user });
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     dispatch({ type: "LOGOUT" });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         isAuthenticated: Boolean(state.user),
//         login,
//         logout
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useReducer, useEffect, useState } from "react";

const AuthContext = createContext();

const initialState = {
  user: null
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      dispatch({
        type: "LOGIN",
        payload: JSON.parse(storedUser)
      });
    }


  }, []);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: Boolean(state.user),

        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);