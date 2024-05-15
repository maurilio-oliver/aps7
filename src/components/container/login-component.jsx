import {Button, Col, Container, FloatingLabel, Form, FormLabel, Row} from "react-bootstrap";
import HeaderComponent from "./header-component.jsx";
import FooterComponent from "./footer-component.jsx";
import {useState} from "react";
import ObjectsHelper from "../config/objects-helper.js";
import MemberService from "../../service/member-service.jsx";

// aqui eu tenho que colocar como parametro da função a set state e o evento
function controlHandler (e,state,setState,path) {
    if (ObjectsHelper.nonNull(path)) {
        let value = (state[path] !== undefined ? state[path] : {})
        value[e.target.name] = e.target.value
        state[path] = value
        setState(state)
    } else {
        state[e.target.name] = e.target.value
    }

}
let Input = (state, stateHandler, props, path) => {

    return  <FloatingLabel controlId="floatingInput" label={props.label}  className="mb-33" >
        {
           props.type !== "date" ? <Form.Control style={{marginBottom: "3%"}} type={props.type} name={props.name} onChange={(e) => {
                controlHandler(e, state, stateHandler, path)
            }} /> :
               <Form.Control value={state[path] && state[path][props.name] && new Date(state[path][props.name])} style={{marginBottom: "3%"}} type={props.type} name={props.name} onChange={(e) => {
                   controlHandler(e, state, stateHandler, path)

               }} />
        }

    </FloatingLabel>

}

function CheckPassSecurity(pass, confirm) {
    console.log({"confirm":confirm, "pass":pass})
    let response = ""
    pass = pass.password

    if (pass === confirm) {
        if (pass.length < 8) {
            response = "A senha tem que ter no minimo 8 caracteres"
        } else if (((pass.match(/\d/g)).length < 1)) {
            response = "A senha deve conter letras e numeros"
        }
    } else {
        if (pass === null || pass === undefined || pass === '') {
            response = ""
        } else {
            response = "As senhas não conhecidem"
        }
    }


    return <span>{response}</span>
}



export default function LoginComponent() {
    let [state,setState] = useState({})
     let [confirmation, setConfirmation] = useState({})




    return <Container>

        <HeaderComponent />


        <Form.Group>

            <Row>
                {/* Basico   */}
                <Col sm={4}>
                    {
                        [
                            {name: "name", label: "Nome:", type: "text"},
                            {name: "taxId", label: "E-mail:", type: "email"},
                            {name: "mobilePhone", label: "Telefone", type: "text"},
                            {name: "email", label: "CPF", type: "text"},
                            {name: "birthDate", label: "Data de nascimento", type: "date", default: "dd-mm-yyyy"},
                        ].map((prop) => {
                            return Input(state, setState, prop, "personal")
                        })
                    }
                </Col>
                {/* Basico   */}
                <Col sm={4}>
                    {
                        [
                            {name: "cardNumber", label: "Numero do cartão:", type: "text"},
                            {name: "name", label: "Nome do titular", type: "email"},
                            {name: "dueDate", label: "Data de validade", type: "email"},
                            {name: "cvv", label: "CVV", type: "email"}

                        ].map((prop) => {
                            return Input(state, setState, prop, "financial")
                        })
                    }
                </Col>
                {/* Basico   */}
                <Col sm={4}>
                    {
                        [
                            {name: "street", label: "Rua:", type: "text"},
                            {name: "neighborhood", label: "Bairro:", type: "text"},
                            {name: "zipCode", label: "CEP:", type: "text"},
                            {name: "number", label: "Numero:", type: "text"},
                            {name: "complement", label: "Complemento:", type: "text"},
                            {name: "reference", label: "referencia:", type: "text"}

                        ].map((prop) => {
                            return Input(state, setState, prop, "residential")
                        })
                    }
                </Col>
            </Row>
        </Form.Group>

        <Row sm={6}>


            {Input(state,setState,{name:"password", label:"password:", type:"password"}, )}
            {Input(confirmation,setConfirmation, {name:"confirmation", label:"confirmation:", type:"password"}, )}

            <CheckPassSecurity pass={state.password} confirm = {confirmation} />


            <Button onClick={() => {
                MemberService.test().then( response => {
                    console.log(response.data)
                    state.response = response.data
                    setState(state)
                    console.log(state)
                })

            }}>Testar</Button>



        </Row>
        <FooterComponent />
    </Container>
}