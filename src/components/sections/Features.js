import Project from "../sections/Projects"
import Share from "../sections/Share"
import UserMan from "../sections/UserMan"
import Knowledge from "../sections/Knowledge"


export const GetFeature = (func, id) => {

    if (func === "project") {
    
        return <Project/>

    } else if (func === "knowledge") {
        return (
            <Knowledge/>
        )
    } else if (func === "share") {
        return (
            <Share/>
        )
    } else if (func === "userman") {
        return (
            <UserMan/>
        )
    }
    
}