import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { GetFeature } from "../sections/Features"


export const GetUser = (type, id) => {
    const [feature, setFeature] = useState("");
    var content = GetFeature(feature, id)

    if (type === "Employee") {
        return (
            <div>
                <h1 style={{
                    color: "dodgerblue"
                }}>{type} Area</h1>
                <br></br>
                <Button block size="lg" type="button" onClick={() => setFeature("project")}>
                    My Projects
                </Button>
                <Button block size="lg" type="button" onClick={() => setFeature("knowledge")}>
                    Access Knowlegde Base
                </Button>
                <Button block size="lg" type="button" onClick={() => setFeature("share")}>
                    Share Project Files
                </Button>
                <div>{content}</div>
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
            <Button block size="lg" type="button" onClick={() => setFeature("project")}>
                My Projects
            </Button>
            <Button block size="lg" type="button" onClick={() => setFeature("knowledge")}>
                Access Knowlegde Base
            </Button>
            <Button block size="lg" type="button" onClick={() => setFeature("share")}>
                Share Project Files
            </Button>
            <div>{content}</div>
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
            <Button block size="lg" type="button" onClick={() => setFeature("project")}>
                Manage Projects
            </Button>
            <Button block size="lg" type="button">
                Manager Knowledge
            </Button>
            <Button block size="lg" type="button" onClick={() => setFeature("userman")}>
                Manage Users
            </Button>
            <div>{content}</div>
        </div>
        
        )
    } else {
        <div>
            <h1> Error, please reload the page. </h1>
        </div>
    }
}