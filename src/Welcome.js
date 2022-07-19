import React, { useContext } from "react";
import UserContext from "./UserContext";

function Welcome() {

    let user = useContext(UserContext)

    console.log(user)

    let { username } = user

    return (
        <div style={{ width: "400px", margin: "20px auto" }}>
            <h1>Welcome</h1>
            <span>Hello {username}! Thanks for visiting our website!</span>
        </div>

    )
}

export default Welcome