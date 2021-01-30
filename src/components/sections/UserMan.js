/* Continue here


function UserMan() {
    return (
<div>
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

export default UserMan;

*/