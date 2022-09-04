import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./index.css";

import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header.jsx";

import Header1 from "./Pages/Header1.jsx";
import Footer from "./Pages/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Cart from "./Pages/Cart.jsx";
import Product1 from "./Components/Product1.jsx";
import Product2 from "./Components/Product2.jsx";

function App() {
  return (
  <>

  <BrowserRouter>
    {/* <Header /> */}
    <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >

    <Header1 />

    <Routes>
      <Route exact path = "/" element = {<Home />} />
      <Route exact path = "/login" element = {<Login />} />
      <Route exact path = "/register" element = {<Register />} />
      <Route exact path = "/cart" element = {<Cart />} />
      <Route exact path = "/laptop" element = {<Product2 />} />
      <Route exact path = "/mobile" element = {<Product1 />} />
    </Routes>

    </SnackbarProvider>

  </BrowserRouter>

  </>  
  );
}

export default App;
