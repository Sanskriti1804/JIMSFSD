import axios from "axios";
//axios - libraru help to make request to backend api

//reusable centeralized instance api client
const api = axios.create({
        baseURL : "http://localhost:3001",
        timeout : 5000, //request timeout
        headers : {
            "Content-Type" : "application/json",  //defualt header sent w every request
        },
    }
);

export default api;