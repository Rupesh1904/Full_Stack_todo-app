import { useState } from 'react'
import {BrowserRouter, Routes, Route,useNavigate,Params, useParams} from 'react-router-dom'
import './ToDoApp.css'

export default function ToDoApp(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} ></Route>
                    <Route path='/Login' element={<LoginComponent/>} ></Route>
                    <Route path='/Welcome/:username' element={<WelcomeComponent/>} ></Route>
                    <Route path='/todos' element={<TodoListComponent/>} ></Route>
                    <Route path='*' element={<ErrorComponent/>} ></Route>
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}
function LoginComponent(){
   
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

function WelcomeComponent(){
    const {username}= useParams()
    return(
        <div className="Welcome">
            <h1>Welcome to ToDo Management Application {username}</h1>
            <div>
                Created using React and Spring Boot!!!
            </div>
        </div>
    )
}
function ErrorComponent(){
    return(
        <div className="Error">
            <h1>We are working really hard!!!</h1>
            <div>
                Page Not Found !!!! Error 404!!!
            </div>
        </div>
    )
}
function TodoListComponent(){
    const todos=[
                    {id:1, description:"Learn AWS"},
                    {id:2, description:"Learn Full Stack"},
                    {id:3, description:"Learn Azure"}
                ]
    return(
        <div className="ListTodosComponent">
            <h1>Here is the List of your Todos</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo=>(
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                         <td>{todo.description}</td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}