import {Button} from "react-bootstrap";
import HeaderNavbarComponent from "./header-navbar-component.jsx";

function HomePage () {
        return (<>
                <div className="container-fluid">
                        <Button variant="primary" > Teste de btn </Button>
                        <HeaderNavbarComponent/>
                </div>

        </>)
}
export default HomePage