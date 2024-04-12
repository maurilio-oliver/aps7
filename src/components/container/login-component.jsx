import {Button, Col, Container, FloatingLabel, Form, FormLabel, Row} from "react-bootstrap";
import HeaderComponent from "./header-component.jsx";
import FooterComponent from "./footer-component.jsx";
import {useState} from "react";

// aqui eu tenho que colocar como parametro da função a set state e o evento
function controlHandler (e,state,setState,path) {
    let value = (state[path] !== undefined ? state[path] : {} )
    value[e.target.name] = e.target.value
    state[path] = value
    setState(state)
    console.log(state)
}
let Input = (state, stateHandler, props, path) => {

    return  <FloatingLabel controlId="floatingInput" label={props.label}  className="mb-33" >
        <Form.Control style={{marginBottom: "3%"}} type={props.type} name={props.name} onChange={(e) => {
            controlHandler(e, state, stateHandler, path)
        }} />
    </FloatingLabel>

}

export default function LoginComponent() {
    let [state,setState] = useState({})

    return <Container>

        <HeaderComponent />



        {/* Basico   */}
        <Form.Group >
            <Row>
            <Col sm ={4}>
            {
                [
                    {name:"name", label:"Nome:", type:"text"},
                    {name:"email", label:"E-mail:", type:"email"},
                    {name:"Telefone", label:"Telefone", type:"email"},
                    {name:"CPF", label:"CPF", type:"email"},
                    {name:"Data de nascimento", label:"Data de nascimento", type:"email"},
                ].map((prop) => {
                    return  Input(state,setState,prop, "personal")
                })
            }
            </Col>
                <Col sm ={4}>
            {
                [
                    {name:"Numero do cartão", label:"Numero do cartão:", type:"text"},
                    {name:"Nome do titular", label:"Nome do titular", type:"email"},
                    {name:"Data de validade", label:"Data de validade", type:"email"},
                    {name:"CVV", label:"CVV", type:"email"}

                ].map((prop) => {
                    return  Input(state,setState,prop, "financial")
                })
            }
                </Col>
            <Col sm ={4}>
            {
                [
                    {name:"Rua", label:"Rua:", type:"text"},
                    {name:"Bairro", label:"Bairro:", type:"text"},
                    {name:"CEP", label:"CEP:", type:"text"},
                    {name:"Numero", label:"Numero:", type:"text"},
                    {name:"Complemento", label:"Complemento:", type:"text"},

                ].map((prop) => {
                    return  Input(state,setState,prop, "residential")
                })
            }
</Col>
            </Row>
        </Form.Group>

        <Row sm={6}>
            <Button onClick={() => {
                console.log(state)
            }}>Testar</Button>

        </Row>
        <FooterComponent />
    </Container>
}