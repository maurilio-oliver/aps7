import {Col, Container, Navbar, NavDropdown, NavLink, Row} from "react-bootstrap";


const HeaderComponent = () => {
    return (<Container>

        <Row>
            <Col >
                    <div className="logo">
                        <img src="/loja-virtual/assets/img/icon.png" alt="lojatcc" width="125px" />
                    </div>
            </Col>
            <Col>

            <Navbar>

                <Navbar.Collapse>
                    <NavDropdown title={"categoria"}>
                        {["Home", "Feminino", "Masculino", "Calça", "Vestido", "pijamas"].map( (items, index) => {return (
                            <NavDropdown.Item href={"/home"} key={index}>
                                <NavLink href={"/home"}>{items}</NavLink>
                            </NavDropdown.Item>
                        )} )}
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
            </Col>
            <Col>
                <Navbar>

                    <Navbar.Collapse>
                        <NavDropdown title={"menu"}>
                            {[{text: false ? "login":"perfil", link: false? "/perfil/":"/home/cadastro"}, {text:"carrinho"}].map( (items, index) => {return (
                                <NavDropdown.Item key={index} href={"#"+items.link}>
                                    <NavLink href={items.link}><a href={items.link}>{items.text}</a></NavLink>
                                </NavDropdown.Item>
                            )} )}
                        </NavDropdown>
                    </Navbar.Collapse>
                </Navbar>
               </Col>
        </Row>


    </Container>)
}

export default HeaderComponent