import axios from "axios";



export const getRequest = (url) => {
    let result = axios.get(url)
    .then((response) => {
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response = " + data);
        return resData;
    });
    return result;
}


export const postRequest = (url, data) => {
    let result = axios.post(url, data)
    .then((response) => {
        var resData = response.data;
         // let data = JSON.stringify(resData);
         // window.alert("Response = " + data);
         if (resData.message === "success") {
             return(resData);
         } else {
             return ({
                 message: "fail"
             });
         }
    });
    return result;
}

export const loginRequest = (data) => {
    let validation = axios.post("http://localhost:8085/users/login", data)
    .then((response) => {
     var resData = response.data;
     if (resData.message === "success") {
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
