import react from "react";
import axios from "axios";



function getRequest(props) {
    axios.get(props.url)
    .then((response) => {
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response = " + data);
    });
}

function postRequest(props) {
    axios.post(props.url, props.data)
    .then((response) => {
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response = " + data);
    });
}
    
var output = ""

export const loginRequest = (data) => {
    axios.post("http://localhost:8085/users/login", data)
    .then((response) => {
        var resData = response.data;
        if (resData.message == "success") {
            output = resData.data;
        } else {
            output = resData.message;
        }
    });
    
    //this here should return resData.data or resData.message
    return output
}