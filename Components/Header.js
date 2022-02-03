import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                                <img 
                                    src={logo}
                                    className="d-inline-block aligh-top"
                                    alt="Logo" 
                                    height="30"
                                    width="30"
                                />{" "}
                                React Site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/"> Home </Nav.Link>
                                    <Nav.Link href="/about"> About us </Nav.Link>
                                    <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                    <Nav.Link href="/blog"> Blog </Nav.Link>
                                </Nav>
                                <Form className="d-inline-flex">
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        style={{right: '5px', width: '180px'}}
                                    />
                                    <Button style={{margin: '0 0 0 5px'}} variant="outline-info">Search</Button>
                                </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/contacts" element={<Contacts/>}/>
                        <Route exact path="/blog" element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}
