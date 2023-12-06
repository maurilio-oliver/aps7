import HeaderComponent from "./header-component.jsx";
import {Button, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";


let SingonComponent = () => {

    let [user, setUser] = useState({})
    const formHandler = (e) =>{
        let data = user
        data[e.target.id] = data[e.target.id] == null ? {}: data[e.target.id]
        data[e.target.id][e.target.name] = e.target.value
        setUser(data)
        console.log(data)

    }

    return (<>
        <HeaderComponent/>
        <Container>
            <Row>
                <h1 className={"text-center"}>Cadastro</h1>
            </Row>
            <Form>
                <Form.Group>
            <h2>Dados básicos</h2>

            {[
                {type: "text", name: "name", id: "personal", placeholder: "Nome completo:"},
                {type: "number", name: "taxId", id: "personal", placeholder: "CPF:"},
                {type: "text", name: "mobilePhone", id: "personal", placeholder: "telefone:"},
                { type: "email", name: "email", id: "personal", placeholder: "email:" },
                { type: "date", name: "birthDate", id: "personal", placeholder: "nascimento:" },
                { type: "password", name: "password", id: "", placeholder: "senha:" },
                { type: "password", name: "passwordConfirmation", id: "", placeholder: "confimar senha:" }].map((input, index) => {
                return <Form.Control key={index} id={input.id} type={input.type} name={input.name} placeholder={input.placeholder} onChange={formHandler}/>
            })}
                </Form.Group>
            <h2>Endereço</h2>

            {[{type: "text", name: "street", id: "residential", placeholder: "Rua:"},
                {type: "text", name: "neighborhood", id: "residential", placeholder: "Bairro:"},
                {type: "text", name: "zipCode", id: "residential", placeholder: "CEP:"},
                {type: "number", name: "number", id: "residential", placeholder: "Número:"},
                {type: "text ", name: "complement", id: "residential", placeholder: "Complemento:"},
                {type: "text ", name: "reference", id: "residential", placeholder: "Referência:"},
                {type: "text ", name: "kind", id: "residential", placeholder: "Tipo de residência:"}].map((input, index) => {
                return <Form.Control key={index} type={input.type} id={input.id} name={input.name} placeholder={input.placeholder} onChange={formHandler}/>
            })}
            <h2>Dados bancários</h2>

            {[{type: "number", name: "cardNumber", id: "financial", placeholder: "Número do cartão:"},
                {type: "text", name: "name", id: "financial", placeholder: "Nome do titular:"},
                {type: "date", name: "dueDate", id: "financial", placeholder: "Data da validade:"},
                {type: "number", name: "cvv", id: "financial", placeholder: "Código de segurança:"}].map((input, index) => {
                return <Form.Control key={index} type={input.type} id={input.id} name={input.name} placeholder={input.placeholder} onChange={formHandler}/>
            })}

            <Button name="sendCadastrar" className="button" onClick={() => {console.log(user)}}>Cadastrar</Button>
            <Button name="sendCancelar" className="button">Cancelar</Button>
            </Form>

        </Container>


    </>)
}

export default SingonComponent