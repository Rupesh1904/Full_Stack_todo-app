import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import {useAuth } from './security/ContextAuth'

export default function LoginComponent(){

    const [password, setPassword]= useState('Rupesh')
    const[username, setUserName]=useState('Rupesh'); 
  //  const[showSuccessMessage,setShowSuccessMessage]=useState(false)
    const[showErrorMessage,setShowErrorMessage]=useState(false)
    const navigate = useNavigate()

    const authContext= useAuth()


    function handleUserNameChange(event){
        setUserName(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    
    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }
        else {
             setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time To Login!!</h1>
            {showErrorMessage && <div>Authentication Failed! Please Check your Credentials!</div>}
            <div className="LoginForm">
                <div>
                    <label >User Name</label>
                    <input type="text" name="Username" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" name="Password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="submit" name="Login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}