import axios from "axios";

const apiClient= axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);
export const retrieveHelloBean
    = ()=> apiClient.get('/hello-world-bean')

export const retriveHelloWorldPathVariable
    = (username)=> apiClient.get(`/hello-world/path-variable/${username}`)

