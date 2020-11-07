import React from 'react'
import { Button, 
    Navbar,
    Collapse, 
    Container, 
    DropdownItem, 
    DropdownMenu,
    NavbarText, 
    DropdownToggle, 
    Nav, 
    NavbarBrand, 
    NavbarToggler, 
    NavItem, 
    NavLink, 
    UncontrolledDropdown, 
} from 'reactstrap';
function NavClient() {
    const toggle=true;
    const isOpen=true;
    return (
        
      <React.Fragment>
             <Container fluid={true}>
                                <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">reactstrap</NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                    Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                    Reset
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>Simple Text</NavbarText>
                            </Collapse>
                        </Navbar>
        </Container>
      </React.Fragment>
    )
}

export default NavClient
