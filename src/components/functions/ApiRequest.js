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
    let validation = axios.post("http://localhost:8085/users/login", data)
    .then((response) => {
     var resData = response.data;
     if (resData.message == "success") {
         return ({
             message: "success",
             data: resData.data,
             user_id: resData.user_id
         }
         );
     } else {
         return ({
            message: "fail",
            data: resData.message
         }
         );
     }
    })   
    return validation;
}
