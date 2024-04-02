import {Col, Container, FigureImage, Image, Navbar, NavDropdown, NavLink, Row} from "react-bootstrap";


const HeaderComponent = () => {
    return (<Container>

        <Row>
            <Col sm={1}>

                <Image src="/src/img/icon.png" alt="lojatcc" width={"100%"}/>

            </Col>
            <Col sm={7}/>

            <Col sm={4}>

                <Navbar>

                    <Col sm={3}>
                    <Navbar.Collapse>
                        <NavDropdown title={"categoria"} >
                            {[{category: "Home", categoryLink: "error"},
                                {category: "Calça", categoryLink: "calca.png"},
                                {category: "Camisas", categoryLink: "camisas.png"},
                                {category: "Casacos", categoryLink: "casacos.png"},
                                {category: "Calçados", categoryLink: "calcado.png"},
                                {category: "Vestidos", categoryLink: "vestido.png"}
                            ].map((items, index) => {
                                return (
                                    <NavDropdown.Item href={"/home"} key={index} id={"hover-effect"}>
                                        <Row sm={2}>
                                            <Col><NavLink href={"/home"}>{items.category} </NavLink></Col>
                                            <Col><FigureImage src={`/src/img/categoria-${items.categoryLink}`}/></Col>
                                        </Row>

                                    </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                    </Navbar.Collapse>
                    </Col>
                    <Col sm={8}>
                    <Navbar.Collapse>
                        <NavDropdown title={"menu"} style={{}}>
                            {[{
                                text: false ? "login" : "perfil",
                                link: false ? "/perfil/" : "/home/cadastro"
                            }, {text: "carrinho"}].map((items, index) => {
                                return (
                                    <NavDropdown.Item key={index} href={items.link}>
                                        <Row>
                                            <Col sm={8}>
                                                <NavDropdown.ItemText>{items.text}</NavDropdown.ItemText>
                                            </Col>
                                            <Col sm={4}>
                                                <FigureImage width={"100%"}
                                                             src="/src/img/carrinho.png"
                                                             alt={items.text}
                                                />
                                            </Col>
                                        </Row>

                                    </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                        <FigureImage src={"/src/img/menu.png"} width={"10%"}></FigureImage>
                    </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Col>

        </Row>


    </Container>)
}

export default HeaderComponent