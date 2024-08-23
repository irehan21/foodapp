import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from './Components/Footer/Footer.jsx'
import LoginPopUp from "./Components/LogInPopUp/LoginPopUp.jsx";
import Cart from "./Pages/Carts/Cart.jsx"
import FoodDisplay from "./Components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "./Components/AppDownload/AppDownload.jsx";

const App = () => {
 
 const [showLogin, setshowLogin] = useState(false);

  return ( 
    <>
    {showLogin ? <LoginPopUp setshowLogin={setshowLogin}/> : <> </> }
      <div className="app">
        <Navbar setshowLogin={setshowLogin}/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/menu" element={<FoodDisplay/>} />
          <Route path="/app" element={<AppDownload/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
