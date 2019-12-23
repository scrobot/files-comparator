import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom'
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

const Header: React.FC = () => {
    return (
        <header className="Header row">
            <div className="col">
                <Navbar dark expand="md">
                    <NavbarBrand href="/">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} className="Header-logo" alt="logo" />
                    </NavbarBrand>
                    <Nav className="float-md-left" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/upload">Upload</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/url">Url</Link>
                        </NavItem>
                        <NavItem>
                        <Link className="nav-link" to="/auth">Login</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/user">Profile</Link>
                        </NavItem>

                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.patreon.com/" target="_blank">Donate</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/scrobot/files-comparator">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;