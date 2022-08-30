import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.jsx';
import Header1 from './Components/Header1.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MobileCard from './Components/MobileCard.jsx';
import LaptopCard from './Components/LaptopCard.jsx';
import PcCard from './Components/PcCard.jsx';
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Home from "./Components/Home.jsx";
import CardsDetails from './Components/CardsDetails.jsx';
import Footer from "./Components/Footer.jsx";
import Cart from "./Components/Cart.jsx";
import { CartProvider } from './Context/CartContext.jsx';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <CartProvider>
      <Header1 />
        <Routes>
          <Route path="/Mobile" element={<MobileCard />} />
          <Route path="/Laptop" element={<LaptopCard />} />
          <Route path="/PC" element={<PcCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path='/cart/:id' element={<CardsDetails />} /> */}
          <Route path = "/" element = {<Home />} />
        </Routes>
        </CartProvider>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
