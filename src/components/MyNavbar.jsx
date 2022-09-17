import React from 'react'
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, NavbarBrand, DropdownItem, DropdownMenu } from 'reactstrap';


const MyNavbar = () => {
    return (
        <div>
            <Navbar color="light" light>
                <NavbarBrand>Emerce</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink>Components</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Pages
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Pages 1
                            </DropdownItem>
                            <DropdownItem>
                                Pages 2
                            </DropdownItem>
                            <DropdownItem>
                                Pages 3
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    )
};

export default MyNavbar;