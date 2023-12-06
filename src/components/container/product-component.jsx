import {Button, Card, CardImg, Carousel, Col, Form, FormSelect, Row} from "react-bootstrap";
import HeaderComponent from "./header-component.jsx";
import FooterComponent from "./footer-component.jsx";
import ProductService from "../../service/product-service.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function getPrincipalProduct() {
    let data = {}

    return data
}

let ProductComponent = () => {
    const {id} = useParams()
    console.log(id)
    let [product, setProduct] = useState({})
    useEffect(() => {

        ProductService.getProducyById(id).then(async response => {
            setProduct(response.data)
            console.log(response.data)

        })
    }, [])


    let indication = [
        {id: 1, name: "calça preta social", price: 199.20, imagePath: "/srce/image"},
        {id: 2, name: "Camiseta listrada bege oversize", price: 69.99, imagePath: "/srce/image/image.png"},
        {id: 3, name: "Casaco de pelucia merrom", price: 159.00, imagePath: "/srce/imagepath"},
        {id: 4, name: "Cropped ombro a ombro preto", price: 99.00, imagePath: "/srce/image/image.png"}
    ]
    return (<div className={"container"}>


        <HeaderComponent/>
        {product && product.id !== null ?<>
        <div className="body-categorias produto">
            <div className="roll">


                <div className="coluna2">
                    <h1>{product.title}</h1>
                    <p>{product.name}</p>

                    <h4> R$ {product.price}</h4>


                    <FormSelect onChange={(event) => {
                        console.log(event.target)
                    }}>
                        <option disabled={true}>Selecione o tamanho</option>
                        {[36, 38, 40, 42, 44, 46].map((value, index) => {
                            return (<option value={value} key={index}>{value}</option>)
                        })}

                    </FormSelect>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Control type={"number"} onChange={(event) => {
                                        if (event.target.value > 10) {
                                            alert("valor não diponivel")
                                            event.target.value = 10
                                        }
                                    }}/>
                                </Col>
                                <Col>
                                    <Button>Adicionar ao carrinho</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>


                    <h3>Descrição:</h3>
                    <p>{product.description}</p>
                </div>

            </div>
        </div>


        <div className="body-categorias">

            <div className="roll roll2">
                <h2>Produtos relacionados</h2>
                <p>Veja mais</p>
            </div>
            <Carousel>
                {indication.map((product, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <Card>
                                <Card.Header>{product.name}</Card.Header>
                                <Card.Body><CardImg src={product.imagePath}></CardImg></Card.Body>
                                <Card.Footer><>R$ {product.price}</>
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>
                    )
                })}

            </Carousel>


        </div>
        </> : <h1>produto não encontrado</h1>}



    <FooterComponent/>
    </div>)
}
export default ProductComponent

