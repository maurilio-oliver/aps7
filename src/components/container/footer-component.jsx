import {Col, Container, Image, Row} from "react-bootstrap";

let FooterComponent = () => {
    return <footer>

            <Row>
                <Col sm={3}>
                        <Row sm={8}>

                        <h3>Baixe o nosso app</h3>
                        <p>Estamos nas melhores plataformas</p>
                        </Row>
                            <Row sm={4}>
                                <Col sm={6}>
                            <Image width={"100%"} src="/src/img/google-play.png" alt="" />
                                </Col>
                                <Col sm={6}>
                            <Image width={"100%"} src="/src/img/app-store.png" alt=""/>
                                </Col>
                            </Row>


                </Col>
                <Col sm={3}>
                    <div className="rodape-2">
                        <h3>Institucional</h3>
                        <ul>
                            <li>Termos e condições</li>
                            <li>Sobre nós</li>
                            <li>Mapa do site</li>
                        </ul>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="rodape-3">
                        <h3>Serviços</h3>
                        <ul>
                            <li>Entrega</li>
                            <li>Formas de pagamentos</li>
                            <li>Trocas e devoluções</li>
                        </ul>
                    </div>
                </Col>
            </Row>

    </footer>
}

export default FooterComponent