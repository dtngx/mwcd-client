import "./Login.css";

import React, { Component, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { loginRequest } from "../functions/ApiRequest";
import { getUser } from "../sections/Users";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [usertype, setUsertype] = useState("");

    const [user_id, setUser_Id] = useState(0);
    const user_idValue = { user_id, setUser_Id };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginValue = { isLoggedIn, setIsLoggedIn };


    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Login clicked!");
        var requestData = {
            username: username,
            password: password
        }
        var res = await loginRequest(requestData);
        console.log(res)
        if (res.message === "success") {
            setUsertype(res.data)
            setUser_Id(res.user_id)
            setIsLoggedIn(true)
        } else {
            setAlert("Username or Password incorrect.")
        }
    }

    var userarea = getUser(usertype, user_id)

if (isLoggedIn == false) {
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <h4>Please sign in to access the H+K Knowledge Base:</h4>
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control autoFocus type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
                <h5 style={{
                    color: "orangered",
                }}>{alert}</h5>

                <h6 style={{
                    color: "grey",
                }}>For this demo, you can login using "employee", "client" or "manager" as username and respective password.
                </h6>

            </Form>
        </div>
    )
} else {
    return (
        <div>
            <div>{userarea}</div>
            <Button block size="lg" onClick={() => setIsLoggedIn(false)}>Logout</Button>
        </div>
        
    )
}
    
};

export default Login;
