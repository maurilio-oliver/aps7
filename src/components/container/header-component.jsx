import {Col, Container, FigureImage, Image, Navbar, NavDropdown, NavLink, Row} from "react-bootstrap";


const HeaderComponent = () => {
    return (<Container>

        <Row>
            <Col >
                    <div className="logo">
                        <img src="https://w7.pngwing.com/pngs/422/1013/png-transparent-shopping-cart-e-commerce-computer-icons-shopping-cart-mode-of-transport-advanced-audio-coding-supermarket-trolley.png" alt="lojatcc" width="125px" />
                    </div>
            </Col>
            <Col>

            <Navbar>

                <Navbar.Collapse >

                    <NavDropdown title={"categoria"} >
                        {["Home", "Feminino", "Masculino", "Calça", "Vestido", "pijamas"].map( (items, index) => {return (
                            <NavDropdown.Item key={index} >

                                <a>{items}</a>

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
                            {[{text: "perfil", link: "/home/cadastro"}, {text:"carrinho"}].map( (items, index) => {return (
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