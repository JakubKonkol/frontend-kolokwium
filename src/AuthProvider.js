import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null);

    const login = (user) => {
        setLoggedUser(user);
    }
    const logout = () => {
        setLoggedUser(null);
    }

    return (
        <AuthContext.Provider value={{loggedUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);