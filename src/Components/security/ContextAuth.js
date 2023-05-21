import { createContext, useContext, useState } from "react"

export const AuthContext= createContext()

export const useAuth= ()=>useContext(AuthContext)

export default function AuthProvider({children}){
    const [number , setNumber]= useState(0);
    const [isAuthenticated, SetAuthenticated] = useState(false)
    return (
        <AuthContext.Provider value={{number,isAuthenticated,SetAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}