import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Logout from "../components/Logout/Logout";
import Product from "../components/ProductDetails/Product";


function Routing(){
    return(
        
        <>
        
            <Router>
                <Header/>
                <Routes>

                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/logout' element={<Logout/>}></Route>
                        <Route path="/product/:id" element={<Product/>}></Route>

                </Routes>
                <Footer/>
            </Router>
        
        </>

    )
}

export default Routing