import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Project from "../sections/Projects";
import Knowledge from "../sections/Knowledge"
import Share from "../sections/Share"



export const GetUser = (type, id) => {
    const [feature, setFeature] = useState("");

    if (type === "Employee") {
        return (
            <div>
                <h1 style={{
                    color: "dodgerblue"
                }}>{type} Area</h1>
                <br></br>
                <Button block size="lg" type="button" onClick={() => setFeature(<Project/>)}>
                    My Projects
                </Button>
                <Button block size="lg" type="button" onClick={() => setFeature(<Knowledge/>)}>
                    Access Knowlegde Base
                </Button>
                <Button block size="lg" type="button" onClick={() => setFeature(<Share/>)}>
                    Share Project Files
                </Button>
                <div>{feature}</div>
            </div>
        )
    
    } 
    if (type === "Client") {
        return (
            <div>
                <h1 style={{
                    color: "limegreen"
                }}>{type} Area</h1>
                <br></br>
            <Button block size="lg" type="button" onClick={() => setFeature(<Project/>)}>
                My Projects
            </Button>
            <Button block size="lg" type="button" onClick={() => setFeature(<Knowledge/>)}>
                Access Knowlegde Base
            </Button>
            <Button block size="lg" type="button" onClick={() => setFeature(<Share/>)}>
                Share Project Files
            </Button>
            <div>{feature}</div>
        </div>
        )
    }
    if (type === "Manager") {
        return (
            <div>
                <h1 style={{
                    color: "orangered"
                }}>{type} Area</h1>
                <br></br>
            <Button block size="lg" type="button">
                Manage Projects
            </Button>
            <Button block size="lg" type="button">
                Manager Knowledge
            </Button>
            <Button block size="lg" type="button">
                Manage Users
            </Button>
            <div>{feature}</div>
        </div>
        
        )
    } else {
        <div>
            <h1> Error, please reload the page. </h1>
        </div>
    }
}