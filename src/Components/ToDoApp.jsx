import { useState } from 'react'
import {BrowserRouter, Routes, Route,useNavigate,Params, useParams,Link} from 'react-router-dom'
import './ToDoApp.css'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import TodoListComponent from './ToDoListComponent'
import LoginComponent from './LoginComponent'

export default function ToDoApp(){

    return (
        <div>
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} ></Route>
                    <Route path='/Login' element={<LoginComponent/>} ></Route>
                    <Route path='/Welcome/:username' element={<WelcomeComponent/>} ></Route>
                    <Route path='/todos' element={<TodoListComponent/>} ></Route>
                    <Route path='/logout'element={<LogoutComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>} ></Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
            
        </div>
    )
}




