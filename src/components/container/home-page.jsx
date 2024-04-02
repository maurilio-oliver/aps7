import HeaderComponent from "./header-component.jsx";
import FooterComponent from "./footer-component.jsx";

import {Container, Row, Col, Button} from "react-bootstrap";

function HomePage() {
    return (<Container>
            <Row>
            <HeaderComponent/>
            </Row>
                <Row>
                    <Col md={9} style={{background:"blue"}}>
                        <h1>Content !</h1>
                    </Col>
                    <Col md={1}/>
                    <Col md={2} style={{background:"red"}}>
                        <h2>A melhor peça para você</h2>
                        <Button variant={'secondary'}>Veja nossas recomendações &#8594;</Button>
                    </Col>
                </Row>

            <FooterComponent/>

        </Container>
    )

}

export default HomePage