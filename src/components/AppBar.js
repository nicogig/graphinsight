import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ModelTraining } from "@mui/icons-material";


export function AppBar() {

    return (
        <Navbar bg="primary" variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand><ModelTraining /> GraphInsight</Navbar.Brand>
            </Container>
        </Navbar>
    );

}