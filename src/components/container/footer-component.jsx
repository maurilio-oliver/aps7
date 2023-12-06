import {Col, Container, Row} from "react-bootstrap";

let FooterComponent = () => {
    return <footer>
        <Container>
            <Row>
                <Col>
                    <div className="rodape-1">
                        <h3>Baixe o nosso app</h3>
                        <p>Estamos nas melhores plataformas</p>
                        <div className="apps">
                            <img src="/loja-virtual/assets/img/google-play.png" alt="" />
                            <img src="/loja-virtual/assets/img/app-store.png" alt=""/>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="rodape-2">
                        <h3>Institucional</h3>
                        <ul>
                            <li>Termos e condições</li>
                            <li>Sobre nós</li>
                            <li>Mapa do site</li>
                        </ul>
                    </div>
                </Col>
                <Col>
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
        </Container>
    </footer>
}

export default FooterComponent