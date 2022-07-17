import React, { useContext } from "react";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

function SignInForm() {

    let [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })


    let navigate = useNavigate()
    let { SignIn } = useContext(UserContext)

    function handleSubmit(event) {
        console.log(credentials)
        event.preventDefault();
        navigate('/')
        SignIn({credentials})

    }

    function handleChange(event) {
        setCredentials((newDeets) => {
            return { ...newDeets, [event.target.name]: event.target.value }
        })
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={credentials.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} />
            </Form.Group>
            <Button type="submit" >Sign In</Button>
        </Form>
    )
}

export default SignInForm