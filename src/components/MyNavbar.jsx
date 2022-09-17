import React from 'react'
import { Navbar, Nav, NavItem, UncontrolledDropdown, DropdownToggle, NavbarBrand, DropdownItem, DropdownMenu, NavbarText } from 'reactstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <div>
            <Navbar color="light" light>
                <NavbarBrand>Emerce</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavbarText>Hello, username</NavbarText>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Pages
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <Link to={"/cart"}>Cart</Link>
                            </DropdownItem>
                            <DropdownItem>
                            <Link to={"/history"}>History</Link>
                            </DropdownItem>
                            <DropdownItem>
                            <Link to={"/admin"}>Admin</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    )
};

export default MyNavbar;