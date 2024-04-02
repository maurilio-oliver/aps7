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
                    <Col md={9}>

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

            </Container>
        </div>


        <div className="container-fluid">
            <FooterComponent/>
        </div>
    </>)

}

export default HomePage