import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
export default function LoginComponent(){
   
    const [password, setPassword]= useState("Rupesh")
    const[username, setUserName]=useState("Rupesh"); 
    const[showSuccessMessage,setShowSuccessMessage]=useState(false)
    const[showErrorMessage,setShowErrorMessage]=useState(false)
    const navigate = useNavigate()

    function handleUserNameChange(event){
        setUserName(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    function handleSubmit(){
        if(username==="Rupesh" &&password==="Rupesh" ){
           setShowSuccessMessage(true)
           setShowErrorMessage(false)
           navigate(`/welcome/${username}`)
        }
        else {
            setShowSuccessMessage(false)
             setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time To Login!!</h1>
            {showSuccessMessage &&  <div>Successfully Authenticated</div>}
            {showErrorMessage && <div>Authentication Failed! Please Check your Credentials!</div>}
            <div className='Message'>{showSuccessMessage}</div>
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