import React, { useState } from "react";
import Button from "react-bootstrap/Button";



export const getUser = (type, id) => {
    var feature


    if (type == "Employee") {
        return (
            <div>
                <h1 style={{
                    color: "dodgerblue"
                }}>{type} Area</h1>
                <br></br>
                <Button block size="lg" type="button">
                    My Projects
                </Button>
                <Button block size="lg" type="button">
                    Access Knowlegde Base
                </Button>
                <Button block size="lg" type="button">
                    Share Project Files
                </Button>
            </div>
        )
    
    } 
    if (type == "Client") {
        return (
            <div>
                <h1 style={{
                    color: "limegreen"
                }}>{type} Area</h1>
                <br></br>
            <Button block size="lg" type="button">
                My Projects
            </Button>
            <Button block size="lg" type="button">
                Access Knowlegde Base
            </Button>
            <Button block size="lg" type="button">
                Share Project Files
            </Button>
        </div>
        )
    }
    if (type == "Manager") {
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
        </div>
        )
    } else {
        <div>
            <h1> Error, please reload the page. </h1>
        </div>
    }
}