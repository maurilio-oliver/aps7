import {Col, Container, FigureImage, Form, Row} from "react-bootstrap";
import HeaderComponent from "./header-component.jsx";




export default function ProductManagerComponent() {

    return <Container>
        <Row>
            <HeaderComponent/>
        </Row>
        <Row>
            <Form>
                <Form.Group>
                    <Row>
                        <Col sm={6}>
                    <Form.Label>Titulo do produto</Form.Label>
                    <Form.Control/>
                   <input type={"file"} onInput={ e => {console.log(e.target.result)}}/>


                    <Form.Label>Descrição</Form.Label>
                    <Form.Control></Form.Control>

                        </Col>
                        <Col sm={6}>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select>

                        {[{category: "Calça", categoryLink: "calca.png"},
                            {category: "Camisas", categoryLink: "camisas.png"},
                            {category: "Casacos", categoryLink: "casacos.png"},
                            {category: "Calçados", categoryLink: "calcado.png"},
                            {category: "Vestidos", categoryLink: "vestido.png"}
                        ].map((items, index) => {
                        return (<option key={index}><FigureImage src={`/src/img/categoria-${items.categoryLink}`}/><Col sm={1}>{items.category}</Col><Col sm={11}><FigureImage src={`/src/img/categoria-${items.categoryLink}`}/></Col> </option>)
                        })}

                    </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Row>
    </Container>;


}