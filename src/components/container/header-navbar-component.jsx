import {Navbar, NavDropdown} from "react-bootstrap";

let HeaderNavbarComponent = () => {
    return (<Navbar expand="lg">
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">entrar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                cadastrar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Separated link
            </NavDropdown.Item>
        </NavDropdown>
            </Navbar>)
}

export default HeaderNavbarComponent;


