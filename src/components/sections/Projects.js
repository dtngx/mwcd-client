import { useState } from "react";
import { postRequest, getRequest } from "../functions/ApiRequest"
import { JsonToTable } from "react-json-to-table";

function Project() {
    var array = [];
    var i;
    const [displaydata, setDisplayData] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const [projectID, setProjectID] = useState(0);
    const [projectteam, setProjectTeam] = useState(0);
    const [data, setData] = useState({
        user_id: 1
    })
    const [membership, setMembership] = useState({
        team_id: "1"
    })



   async function teammemberGet() {

        var ros = await postRequest("http://localhost:8085/tms/",data);
        if (ros.message === "success") {
            setMembership(await ros.data)
        }
        console.log(ros.data)
    }

    async function projectGet() {



        
        for (i = 0; i < membership.length; i ++) {
            console.log(membership[i])
            
            var res = await postRequest("http://localhost:8085/userproject/", membership[i]);
            if (res.message === "success") {
                array.push(await res.data)
            }
            console.log(await res.data)
            
        }
    console.log(array)
    var newJSON = {
        data: array
    }
    var pJSON = JSON.stringify(newJSON)
    var parsedJSON = JSON.parse(pJSON)
    setDisplayData(newJSON)
    console.log(parsedJSON)
    

    }

    async function saveProjectsHandler() {
        const value = {
            project_id: projectID,
            name: projectName,
            startdate: projectDate,
            projectteam: projectteam,
            user_id: data.user_id
        };

        await postRequest("http://localhost:8085/projects/", value)

        await postRequest("http://localhost:8085/teammember/", value)
    }

    return (
        <div>
            <h1>My Projects</h1>
            <button onClick={() => projectGet()}>Refresh Projects</button>
            <button onClick={() => teammemberGet()}>Get Teammembership</button>
        <JsonToTable json={displaydata}/>

            <br></br>

            <h3>Project ID:</h3>
            <input type="text" placeholer="Project ID: 00000" value={projectID} onChange={e => setProjectID(e.target.value)} />
            <br></br>
            <h3>Project Name:</h3>
            <input type="text" placeholer="Project Name" value={projectName} onChange={e => setProjectName(e.target.value)} />
            <br></br>
            <h3>Project Start Date:</h3>
            <input type="text" placeholer="Project Start Date: ex. 15-12-2020" value={projectDate} onChange={e => setProjectDate(e.target.value)} />
            <br></br>
            <h3>Project Team::</h3>
            <input type="text" placeholer="Projectteam" value={projectteam} onChange={e => setProjectTeam(e.target.value)} />
            <br></br>
            <button onClick={saveProjectsHandler}>Add Project</button>
            
            
        </div>
    )
}

export default Project;