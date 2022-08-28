import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CardsDetails from './Components/CardsDetails.js';
import Cards from './Components/Cards.js';

function App() {
  return (
    <>
    <BrowserRouter>

      {/* <h1>App</h1> */}
      <NavigationBar />
      <Routes>
        <Route path = '/' element = {<Cards />}/>
        <Route path = '/cart' element = {<CardsDetails />}/>
      </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;

// switch has been replaced by Routes.