import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
// import MainCon from './Components/ec/Main';
// import MainSup from './Components/es/Main';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      {/* <Route path='/consumers' element={<MainCon/>}></Route>
      <Route path='/suppliers' element={<MainSup/>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;