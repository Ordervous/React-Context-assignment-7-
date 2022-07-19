import React, { useContext } from "react";
import { Link, Outlet } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Stack, Container } from "react-bootstrap";
import UserContext from "./UserContext";

function Home() {

    let { username, signOut } = useContext(UserContext)
 
    function authLink() {

        if (username) {

            return <Nav className="me-auto">
                <Navbar.Text>
                    Signed in as: <a href="/sign-in">{username}</a>
                </Navbar.Text>
                <Link to="/" className="nav-link justify-content-end" onClick={{ signOut }}>Sign Out</Link>
            </Nav>

        } else {

            return <Nav className="me-auto">
                <Link to="/sign-in" className="nav-link justify-content-end">Sign In</Link>
            </Nav>

        }
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                    </Nav>
                    <Navbar.Text>
                        {authLink()}
                    </Navbar.Text>
                </Container>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto">
                <Outlet />
            </Stack>
        </>
    )
}

export default Home