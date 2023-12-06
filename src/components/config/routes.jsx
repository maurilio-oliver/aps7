import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../container/home-page.jsx";
import ProductComponent from "../container/product-component.jsx";
import SingonComponent from "../container/singon-component.jsx";

function Test() {
    return (<>Test</>)
}
var RoutesPath = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path={"/"} element={ <ProductComponent/> }/>
            <Route path={"/home/cadastro"} element={<SingonComponent/>}/>
            <Route path={"/home/entrar"}/>
            <Route path={"/produto/:id"} element={<ProductComponent/>}/>
            <Route path={"/vendedor/produto/criar"}/>
            <Route path={"/vendedor/produto/:productId"}/>
            <Route path={"/vendendor/perfil/settings"}/>
            <Route path={"/cliente/perfil/settings"}/>
        </Routes>
    </BrowserRouter>)
}

export default RoutesPath