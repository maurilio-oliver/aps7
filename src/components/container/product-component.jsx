import {Button, Card, CardImg, Carousel, Col, Form, FormSelect, Row} from "react-bootstrap";
import HeaderComponent from "./header-component.jsx";
import FooterComponent from "./footer-component.jsx";
import ProductService from "../../service/product-service.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ObjectsHelper from "../config/objects-helper.js";

let ProductComponent = () => {
    const {id} = useParams()
    let [state, setState] = useState({})
    let [product, setProduct] = useState({})
    let [indicationList, setIndication] = useState([])
    





    useEffect(() => {
        function def2(){
            ProductService.getRecommender([]).then( response => {
                setIndication(response)
                setState({...state.index,index:0})

            })
        }
        function def(){
           ProductService.getProducyById(1).then( response => {
                    setProduct(response)
           })

       }

       def()
       def2()

    },[])





    return (<div className={"container"}>


        <HeaderComponent/>
        {ObjectsHelper.nonNull(product)? <>
        <div className="body-categorias produto">

            <div className="roll">


                <div className="coluna2">
                    <h1>{product.title}</h1>
                    <p>{product.name}</p>

                    <h4> R$ {product.price}</h4>


                    <FormSelect onChange={(event) => {
                      // aqui  console.log(event.target)
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
                                        } else if (event.target.value < 0) {
                                            event.target.value = 0
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
            <Carousel slide={false}
            onSelect={(e) => {
                let index = ((indicationList.length - 3) >= e) ? e : 0
                setState({...state.index, index})

            }}
            activeIndex={state.index}
            inlist={indicationList}
            >
                {indicationList.map((product, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-between">
                                {indicationList.slice(state.index, state.index + 3).map((product, idx) => (
                                    <Card key={idx}>
                                        <Card.Header>{product.name}</Card.Header>
                                        <Card.Body><CardImg sizes={"small"} src={product.imagePath} /></Card.Body>
                                        <Card.Footer>R$ {product.price}</Card.Footer>
                                    </Card>
                                ))}
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>


        </div>
        </>
            : <><h1>produto não encontrado</h1>

            </>}



    <FooterComponent/>
    </div>)
}
export default ProductComponent

