import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      {/*Navbar*/}
      <Navbar click={() => setSideToggle(true)} />
      {/*SideDrawer*/}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/*Backdrop*/}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/product/:id" element={<ProductScreen match />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
