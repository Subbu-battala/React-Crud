import React, { createContext, useEffect,  useState, useCallback } from "react";

// context ref
export const AuthContext = React.createContext();

// context provider
const AuthProvider = (props) => {
    const [currentUser,setCurrentUser] = useState(null)

    return(
        <AuthContext.Provider value={{ currentUser }}>
            {
                props.children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider