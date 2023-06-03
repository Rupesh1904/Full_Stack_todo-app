import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { retriveHelloWorldPathVariable } from '../API/helloWorldApiService'


export default function WelcomeComponent(){
    const {username}= useParams()
    const [message, setMessage]=useState(null)

    function callHelloWorldRestAPI(){
        console.log("hello")

        // axios.get('http://localhost:8080/hello-world-bean')
        // .then((response)=> successResponse(response))
        // .catch( (error)=> errorResponse(error))
        // .finally(()=>console.log("clean up"))

        // axios.get('http://localhost:8080/hello-world-bean')
        // .then((response)=> successResponse(response))
        // .catch( (error)=> errorResponse(error))
        // .finally(()=>console.log("clean up"))

        // retrieveHelloBean()
        // .then((response)=> successResponse(response))
        // .catch((error)=>errorResponse(error))
        // .finally(()=>console.log('cleanup'))

        retriveHelloWorldPathVariable('Rupesh')
        .then((response)=> successResponse(response))
        .catch((error)=>errorResponse(error))
        .finally(()=>console.log('cleanup'))


    }

    function successResponse(response){
        console.log(response)
        setMessage(response.data.message)

    }

    function errorResponse(error){
        console.log(error)
    }
    return(
        <div className="Welcome">
            <h1>Welcome to ToDo Management Application {username}</h1>
            <br />
            <div>
                <h2>Want To Manage Your ToDos?</h2>
                <br />
                <Link to="/todos" className='nav-link'>
                    <h4>👉 Todos</h4>
                </Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestAPI}>Call HelloWorld</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}