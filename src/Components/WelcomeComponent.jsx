import { useParams,Link} from 'react-router-dom'
export default function WelcomeComponent(){
    const {username}= useParams()
    return(
        <div className="Welcome">
            <h1>Welcome to ToDo Management Application {username}</h1>
            <div>
                <h2>Want To Manage Your ToDos?</h2>
                <Link to="/todos">Todos!</Link>
            </div>
        </div>
    )
}