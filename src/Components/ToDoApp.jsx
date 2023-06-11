import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './ToDoApp.css'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import TodoListComponent from './ToDoListComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from './security/ContextAuth'
import {useAuth } from './security/ContextAuth'
import { TodoComponent } from './ToDoComponent'



function AuthenticatedRoute({children}){
    const authContext =useAuth()
    if(authContext.isAuthenticated)
        return children
    return <Navigate to ="/" /> 
}

export default function ToDoApp(){


    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>} ></Route>
                        <Route path='/Login' element={<LoginComponent/>} ></Route>
                        <Route path='/Welcome/:username' element={
                            <AuthenticatedRoute>
                                    <WelcomeComponent/>
                            </AuthenticatedRoute>
                        }>
                        </Route>
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <TodoListComponent/>
                            </AuthenticatedRoute>
                        } ></Route>
                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent/>
                            </AuthenticatedRoute>
                        } ></Route>
                        <Route path='/logout'element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path='*' element={<ErrorComponent/>} ></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            <FooterComponent/>
        </div>
    )
}




