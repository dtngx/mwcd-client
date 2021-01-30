import react, { useState } from "react";
import { postRequest } from "../functions/ApiRequest"

function Project() {
    let data = {
        user_id: 1
    }
    const [displaydata, setDisplayData] = useState({ data: [{ project_id: 0, name: "empty", startdate: "0000-00-00" }] });





    async function projectGet() {
        var res = await postRequest("http://localhost:8085/userproject/", data);
        console.log(res.data)
        if (res.message === "success") {
            setDisplayData(res.data);
        }
    }



    return (
        <div>
            <h1>Projects</h1>
            <button onClick={() => projectGet()}>Refresh Projects</button>
            <div>
            {displaydata.project_id}
            
            </div>
        </div>
    )
}

export default Project;