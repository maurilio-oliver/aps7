import HeaderComponent from "./header-component.jsx";
import FooterComponent from "./footer-component.jsx";

import {Container, Row, Col, Button, Carousel, Card, CardImg} from "react-bootstrap";
import {useEffect, useState} from "react";
import ProductService from "../../service/product-service.js";

function loadProducts(setState, state) {

    ProductService.getRecommender([]).then( response => {

        setState({...state, products:response})


    })
}

function HomePage() {
    let [state, setState] = useState({index:0})
    if (state.products === undefined) {
        loadProducts(setState, state)
    }
    // useEffect(() => {
    //
    //     //loadProducts(setState, state)
    //
    //
    // },[state.products])
    console.log(state)
    return (<Container>
            <Row>
            <HeaderComponent/>
            </Row>
                <Row>
                    <Col md={9}>

                        <Row>
                            <h1>Popular</h1>
                        <Carousel slide={false}
                                  onSelect={(e) => {
                                      let index = ((state.products.length - 3) >= e) ? e : 0
                                      setState({...state, index:index})

                                  }}
                                  activeIndex={state.index}
                                  inlist={state.products}
                        >
                            {state.products && state.products.map((product, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <div className="d-flex justify-content-between">
                                            {state.products.slice(state.index, state.index + 3).map((product, idx) => (
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
                        </Row>
                        <Row>
                            <h1>Tendencia</h1>
                            <Carousel slide={false}
                                      onSelect={(e) => {
                                          let index = ((state.products.length - 3) >= e) ? e : 0
                                          setState({...state, index:index})

                                      }}
                                      activeIndex={state.index}
                                      inlist={state.products}
                            >
                                {state.products && state.products.map((product, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="d-flex justify-content-between">
                                                {state.products.slice(state.index, state.index + 3).map((product, idx) => (
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
                        </Row>
                        <Row>
                            <h1>Para você</h1>
                            <Carousel slide={false}
                                      onSelect={(e) => {
                                          let index = ((state.products.length - 3) >= e) ? e : 0
                                          setState({...state, index:index})

                                      }}
                                      activeIndex={state.index}
                                      inlist={state.products}
                            >
                                {state.products && state.products.map((product, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="d-flex justify-content-between">
                                                {state.products.slice(state.index, state.index + 3).map((product, idx) => (
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
                        </Row>
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