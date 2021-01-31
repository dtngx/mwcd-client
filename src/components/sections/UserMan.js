import { useState } from "react";

import { postRequest } from "../functions/ApiRequest"


function UserMan() {

    const [uid, setUID] = useState();
    const [uname, setUname] = useState("");
    const [pword, setPword] = useState("");
    const [utype, setUtype] = useState("")


    async function saveUserHandler(event) {
        event.preventDefault();
            const value = {
                user_id: uid,
                username: uname,
                password: pword,
                usertype: utype
            };
    
            var res = await postRequest("http://localhost:8085/users/", value)
            console.log(res)
        }

    
    return (
        <form>
            <h1>Add User:</h1>
            <h3>User ID:</h3>
            <input type="text" placeholer="UserID: 00000" value={uid} onChange={(e) => setUID(e.target.value)} />
            <br></br>
            <h3>Username:</h3>
            <input type="text" placeholer="Username" value={uname} onChange={e => setUname(e.target.value)} />
            <br></br>
            <h3>Password:</h3>
            <input type="password" placeholer="Password" value={pword} onChange={e => setPword(e.target.value)} />
            <br></br>
            <h3>Usertype:</h3>
            <input type="text" placeholer="Usertype" value={utype} onChange={e => setUtype(e.target.value)} />
            <br></br>
            <br></br>
            <button type="submit" onClick={saveUserHandler}>Add User</button>
        </form>


    )
}

export default UserMan;

