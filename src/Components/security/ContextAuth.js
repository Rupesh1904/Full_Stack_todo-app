import { createContext, useContext, useState } from "react";
const AuthContext= createContext()

export const useAuth= ()=>useContext(AuthContext)


export default function AuthProvider({children}){
    
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername]= useState(null) 

    function login(username, password){
        if(username==="in28minutes" && password==="Rupesh" ){
            setAuthenticated(true)
            setUsername(username)
            return true
         }
         else {
            setAuthenticated(false)
            setUsername(null)
            return false
         }
    }
    function logout(){
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,setAuthenticated,login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )
}