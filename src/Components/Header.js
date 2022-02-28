import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink , Link} from 'react-router-dom'
import '../CSS/style.css';

export default function Header() {
  return (
    <React.Fragment>
        <header className="k_header">
            <Nav className="justify-content-center" activeKey="/home" >
                <Nav.Item className="mt-3">
                    <NavLink to="/" className="k_nav">Home</NavLink>&nbsp;&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item className="mt-3">
                    <Link to="/login" className="k_nav">Login</Link>&nbsp;&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item className="mt-3">
                    <NavLink to="/register" className="k_nav">Register</NavLink>&nbsp;&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item className="mt-3">
                    <Link to="/getfriends" className="k_nav">Get Friends</Link>&nbsp;&nbsp;&nbsp;
                </Nav.Item>
                <Nav.Item className="mt-3">
                    <NavLink to="/logout" className="k_nav">Logout</NavLink>
                </Nav.Item>
            </Nav>
        </header>
        
    </React.Fragment>
  )
}
