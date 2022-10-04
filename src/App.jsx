import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/home/Main';
import MainCat from './Components/cats/Main';
import MainMow from './Components/movies/Main';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/categories' element={<MainCat/>}></Route>
      <Route path='/movies' element={<MainMow/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
