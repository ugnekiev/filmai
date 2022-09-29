import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import MainCat from './Components/cats/Main';
import MainMow from './Components/movies/Main';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cats' element={<MainCat/>}></Route>
      <Route path='/movies' element={<MainMow/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
