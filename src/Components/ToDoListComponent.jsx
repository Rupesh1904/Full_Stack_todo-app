export default function TodoListComponent(){

    const today= new Date()
    const targetDate= new Date(today.getFullYear()+12, today.getMonth(),today.getDay())

    const todos=[
                    {id:1, description:"Learn AWS",done:false, targetDate:targetDate},
                    {id:2, description:"Learn Full Stack",done:false, targetDate:targetDate},
                    {id:3, description:"Learn Azure",done:false, targetDate:targetDate}
                ]
    return(
        <div className="container">
            <h1>Here is the List of your Todos</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Done?</td>
                            <td>Target</td>
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
                                         <td>{todo.targetDate.toDateString()}</td>
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


