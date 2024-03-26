import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MaintenceCenter from './Pages/MaintenceCenter';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Car from './Components/car/Car';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Car />
      <Routes>
        <Route path='/' element = {< Shop/>}/>
        <Route path='/Сэлбэг' element = {< Product/>}/>
        <Route path='/Засварын төв' element = {< MaintenceCenter/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
