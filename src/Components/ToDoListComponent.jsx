import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsername } from "../API/TodoApiService"
import { retrieveAllTodosForUsernameApi} from "../API/TodoApiService"
export default function TodoListComponent(){

    const today= new Date()
    const targetDate= new Date(today.getFullYear()+12, today.getMonth(),today.getDay())

    const [todos, setTodos]=useState([]) 
    const [message, setMessage]=useState(null) 
    useEffect (()=>refreshTodos(),[])

    function refreshTodos(){
        retrieveAllTodosForUsernameApi('in28minutes')
        .then(response=>{
            setTodos(response.data)
        })
        .catch(error=>console.log(error))
    }
    function deleteTodo(id){
        deleteTodoApi('in28minutes', id)
        .then(
            ()=>{
                setMessage(`Delete of Todo with ${id} successfull`)
                refreshTodos()
            }

        )
        .catch(error=>console.log(error))
    }

    return(
        <div className="container">
            <h1>Here is the List of your Todos</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Done?</th>
                            <th>Target</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo=>(
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                         <td>{todo.description}</td>
                                         <td>{todo.done.toString()}</td>
                                         {/* <td>{todo.targetDate.toDateString()}</td> */}
                                         <td>{todo.targetDate.toString()}</td>
                                         <td><button className="btn btn-warning" 
                                                        onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
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


