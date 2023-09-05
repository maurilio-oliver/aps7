import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Components from "./Components.jsx";
import SellerModal from './components/sellerModal/seller-modal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/">
          <Routes>
              <Route path="/a" element={<App/>}/>
              <Route path="/singIn" element={<SellerModal/>}/>
              <Route path="/" element={<Components/>}/>
        </Routes>
      </BrowserRouter>

  </React.StrictMode>,
)
