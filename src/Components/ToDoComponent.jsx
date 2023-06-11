import { Params, useParams } from "react-router-dom"
import { retrieveTodoApi } from "../API/TodoApiService"
import { useAuth } from "./security/ContextAuth"
import { useEffect, useState } from "react"
export function TodoComponent(){

    const [description, setDescription]= useState('')
    const {id}= useParams()
    const AuthContext= useAuth()
    const username= AuthContext.username
    
    useEffect(
        ()=>retriveTodos(),[id]
    )

    function retriveTodos(){
        retrieveTodoApi(username,id)
        .then(response=>{
            setDescription(response.data.description)
        })
        .catch(error=>console.log(error))

    }
    return (
        <div className="container">
            <h1>Enter Todo Details below</h1>
            
            <div>
                description:{description}
            </div>

        </div>

    )
}