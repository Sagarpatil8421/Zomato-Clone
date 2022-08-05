
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import RestaurantDetails from './Components/Details/RestaurantDetails';
import Filter from './Components/Filter/Filter';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:rName' element={<RestaurantDetails/>} />
        <Route path='/filter' element={<Filter/>} />
      </Routes>
    </div>
  );
}

export default App;
