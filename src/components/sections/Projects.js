import { useState } from "react";
import { postRequest } from "../functions/ApiRequest"

function Project() {
    let data = {
        user_id: 1
    }
    const [displaydata, setDisplayData] = useState({ data: [{ project_id: 0, name: "empty", startdate: "0000-00-00" }] });
    const [projectName, setProjectName] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const [projectID, setProjectID] = useState(0);
    const [projectteam, setProjectTeam] = useState(0);





    async function projectGet() {
        var res = await postRequest("http://localhost:8085/userproject/", data);
        console.log(res.data)
        if (res.message === "success") {
            setDisplayData(res.data);
        }
    }

    async function saveProjectsHandler() {
        console.log("send")
        const value = {
            project_id: projectID,
            name: projectName,
            startdate: projectDate,
            projectteam: projectteam
        };
        console.log(value)
        var res = await postRequest("http://localhost:8085/projects/", value)
        console.log("here")
        console.log(res.data)
    }

    return (
        <div>
            <h1>Projects</h1>
            <button onClick={() => projectGet()}>Refresh Projects</button>
            <div>
            {displaydata.project_id}
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
        </div>
    )
}

export default Project;