import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsername } from "../API/TodoApiService"
import { retrieveAllTodosForUsernameApi} from "../API/TodoApiService"
import { useAuth } from "./security/ContextAuth"
import { useNavigate } from "react-router-dom"

export default function TodoListComponent(){

    const today= new Date()
    const targetDate= new Date(today.getFullYear()+12, today.getMonth(),today.getDay())

    const authContext= useAuth()
    const username= authContext.username

    const [todos, setTodos]=useState([]) 
    const [message, setMessage]=useState(null)

    const navigate= useNavigate()
    
    useEffect (()=>refreshTodos(),[])

    function refreshTodos(){
        retrieveAllTodosForUsernameApi(username)
        .then(response=>{
            setTodos(response.data)
        })
        .catch(error=>console.log(error))
    }
    function deleteTodo(id){
        deleteTodoApi(username, id)
        .then(
            ()=>{
                setMessage(`Delete of Todo with ${id} successfull`)
                refreshTodos()
            }

        )
        .catch(error=>console.log(error))
    }
    function updateTodo(id){
       console.log('clicked',+id)
       navigate(`/todo/${id}`)
    }
    function addNewTodo(){
        navigate(`/todo/-1`)
    }

    return(
        <div className="container">
            <h1>Here is the List of your Todos</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done?</th>
                            <th>Target</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo=>(
                                    <tr key={todo.id}>
                                         <td>{todo.description}</td>
                                         <td>{todo.done.toString()}</td>
                                         {/* <td>{todo.targetDate.toDateString()}</td> */}
                                         <td>{todo.targetDate.toString()}</td>
                                         <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                         <td><button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
                <div className="btn btn-success m-5" onClick={addNewTodo}>Add Todo</div>
            </div>
        </div>
    )
}


