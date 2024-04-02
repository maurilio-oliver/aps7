import {Col, Container, FigureImage, Image, Navbar, NavDropdown, NavLink, Row} from "react-bootstrap";
import React from "react";
import popover from "bootstrap/js/src/popover.js";


const HeaderComponent = () => {
    return (<Container>

        <Row>
            <Col >
                    <div className="logo">
                        <img src="/src/img/icon.png" alt="lojatcc" width="50px" />
                    </div>
            </Col>
            <Col>

            <Navbar>

                <Navbar.Collapse>
                    <NavDropdown title={"categoria"}>
                        {[  {category:"Home", categoryLink:"error"},
                            {category:"Calça", categoryLink:"calca.png"},
                            {category:"Camisas", categoryLink:"camisas.png"},
                            {category:"Casacos", categoryLink:"casacos.png"},
                            {category:"Calçados", categoryLink:"calcado.png"},
                            {category:"Vestidos", categoryLink:"vestido.png"}
                        ].map( (items, index) => {return (
                            <NavDropdown.Item href={"/home"} key={index}>
                                <Row sm={2}>
                                    <Col><NavLink href={"/home"}>{items.category} </NavLink></Col>
                                    <Col><FigureImage src={`/src/img/categoria-${items.categoryLink}`} /></Col>
                                </Row>

                            </NavDropdown.Item>
                        )} )}
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
            </Col>
            <Col>
                <Navbar >


                    <Navbar.Collapse>
                        <NavDropdown title={"menu"} style={{}} >
                            {[{text: false ? "login":"perfil", link: false? "/perfil/":"/home/cadastro"}, {text:"carrinho"}].map( (items, index) => {return (
                                <NavDropdown.Item key={index} href={"#"+items.link}>
                                    <NavLink href={items.link}><a href={items.link}>{items.text} <Image width={"13%"}
                                        src="/src/img/carrinho.png"
                                        alt=""
                                        className="menu-celular"
                                        onClick={() => {
                                            // Implemente a função menuCelular aqui
                                        }}
                                    /></a></NavLink>
                                </NavDropdown.Item>
                            )} )}
                        </NavDropdown>
                        <FigureImage src={"/src/img/menu.png"} width={"10%"}></FigureImage>
                    </Navbar.Collapse>

                </Navbar>
               </Col>
        </Row>


    </Container>)
}

export default HeaderComponent