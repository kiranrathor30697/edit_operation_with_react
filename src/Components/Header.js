import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink , Link} from 'react-router-dom'
import '../CSS/Header.css';

export default function Header() {
  return (
    <React.Fragment>
        <header className="k_header">
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <NavLink to="/" className="k_link">Home</NavLink>&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item>
                    <Link to="/login">Login</Link>&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/register">Register</NavLink>&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/logout">Logout</NavLink>&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item>
                    <Link to="/getfriends">Get Friends</Link>
                </Nav.Item>
            </Nav>
        </header>
        
    </React.Fragment>
  )
}
