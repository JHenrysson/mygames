import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

// important convention to follow is that the file name is the name of the component

function Navigation(){
    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Link to="/" className="navbar-brand">
                Games
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/memory" className="nav-link">
                        Memory
                    </Link>
                    <Link to="/snake" className="nav-link">
                        Snake
                    </Link>
                    <Link to="/minesweeper" className="nav-link">
                       Minesweeper
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


//every react compenent will have this export default + name of component

export default Navigation;