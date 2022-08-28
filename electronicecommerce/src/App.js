import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MobileCard from './Components/MobileCard.jsx';
import LaptopCard from './Components/LaptopCard.jsx';
import PcCard from './Components/PcCard.jsx';
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Home from "./Components/Home.jsx";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/Mobile" element={<MobileCard />} />
          <Route path="/Laptop" element={<LaptopCard />} />
          <Route path="/PC" element={<PcCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path = "/" element = {<Home />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
