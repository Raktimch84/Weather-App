import './App.css';
import About from './components/About';
import Weatherapp from './components/weatherapp/weatherapp';
import Menu from './components/Menu';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Weatherapp />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
        <Menu />
      </BrowserRouter>
    </>
  );
}

export default App;
