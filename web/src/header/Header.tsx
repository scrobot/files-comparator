import React from 'react';
import "./Header.css"
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

const Header: React.FC = () => {
    return (
        <header className="Header">
            <div>
                <Navbar expand="md">
                    <NavbarBrand href="/">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} className="Header-logo" alt="logo" />
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        {/*<NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>*/}
                        <NavItem>
                            <NavLink href="https://github.com/scrobot/files-comparator">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;