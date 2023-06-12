import { Params, useNavigate, useParams } from "react-router-dom"
import { retrieveTodoApi } from "../API/TodoApiService"
import { useAuth } from "./security/ContextAuth"
import { useEffect, useState } from "react"
import {Formik,Field,Form, ErrorMessage} from 'formik'
import { updateTodoApi } from "../API/TodoApiService"
import { createTodoApi } from "../API/TodoApiService"

export function TodoComponent(){

    const navigate= useNavigate()
    const [description, setDescription]= useState('')
    const [targetDate, setTargetDate]= useState('')
    const {id}= useParams()
    const AuthContext= useAuth()
    const username= AuthContext.username
    
    useEffect(
        ()=>retriveTodos(),[id]
    )

    function retriveTodos(){
        if(id!=-1){
            retrieveTodoApi(username,id)
        .then(response=>{
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
        })
        .catch(error=>console.log(error))
        }
    }
    function onSubmit(values){
        console.log(values)
        const todo={
            id:id,
            username:username,
            description:values.description,
            targetDate:values.targetDate,
            done:false
        }
        if(id==-1)
        {
            createTodoApi(username,todo)
            .then(response=>{
               navigate('/todos')
            })
            .catch(error=>console.log(error))
        }
        else{
            updateTodoApi(username,id,todo)
            .then(response=>{
               navigate('/todos')
            })
            .catch(error=>console.log(error))
        }
       
    }
    function validate(values){

        let errors={
        }
        if (values.description.length<5){
            errors.description='Enter at least 5 characters'
        }
        if(values.targetDate===null){
            errors.targetDate= 'Enter Valid date'
        }
        console.log(values)
        return errors
    }
 
    return (
        <div className="container">
            <h1>Enter Todo Details below</h1>
            <div>
               <Formik initialValues={{description,targetDate}} 
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}>
                {
                    (props)=>(
                        <Form>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                          <ErrorMessage
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>

                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>

        </div>

    )
}