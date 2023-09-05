import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SellerServiceClient from './service/seller-service';
function Components () {
    return (
        <>
            <div>
            <button onClick={() => {SellerServiceClient.findbyId('http://localhost:8080/member/1')
        console.log("oi")}}>default</button>
            <button className={"btn-primary"}>primario</button>
            <button className={"btn-segundary"}>segundario</button>
            <button className={"btn-warning"}>warning</button>
            <button className={"btn-info"}>infor</button>
            <button className={"btn-success"}>succes</button>
            <button className={"btn-error"}>error</button>
            </div>
            <div>
                <Button Class>test</Button>
            </div>

        </>)
}
export default Components