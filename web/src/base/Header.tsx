import React from 'react';
import "../css/Header.css"
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
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/upload">Upload</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/url">Url</NavLink>
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