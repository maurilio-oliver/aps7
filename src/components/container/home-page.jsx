import React, {useState, useEffect} from "react";
import HeaderNavbarComponent from "./header-navbar-component.jsx";
import HeaderComponent from "./header-component.jsx";
import FooterComponent from "./footer-component.jsx";
import ProductComponent from "./product-component.jsx";
import SingonComponent from "./singon-component.jsx";
import {Container, Row, Col, Image, Button, NavLink} from "react-bootstrap";

function HomePage() {
    return (<>

        <div className="container">

        </div>
        <div className="container-fluid">
            <HeaderComponent/>

        </div>


        <div className="banner">
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Loja Virtual</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Image
                            src="assets/img/icon.png"
                            alt="lojatcc"
                            width="125px"
                            className="logo"
                        />
                    </Col>

                    <Col md={6}>
                        <a href="/carrinho" title="">
                            <Image
                                src="assets/img/carrinho.png"
                                alt=""
                                width="30px"
                                height="30px"
                            />
                        </a>
                        <Image
                            src="assets/img/menu.png"
                            alt=""
                            className="menu-celular"
                            onClick={() => {
                                // Implemente a função menuCelular aqui
                            }}
                        />
                    </Col>
                    <Col md={3} className="coluna1">
                        <h1>A melhor peça para você</h1>
                        <br/>
                        <Button href="#">Veja nossas recomendações &#8594;</Button>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="categorias">
            <Container className="body-categorias">
                <Row>
                    <Col md={3}>
                        <Image src="img/categoria-calca.png" alt=""/>
                    </Col>
                    <Col md={3}>
                        <Image src="img/categoria-camisas.png" alt=""/>
                    </Col>
                    <Col md={3}>
                        <Image src="img/categoria-casacos.png" alt=""/>
                    </Col>
                    <Col md={3}>
                        <Image src="img/categoria-calcado.png" alt=""/>
                    </Col>
                    <Col md={3}>
                        <Image src="img/categoria-vestido.png" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>


        <div className="container-fluid">
            <FooterComponent/>
        </div>
    </>)

}

export default HomePage