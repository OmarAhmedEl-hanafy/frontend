import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import Movies from "./components/Movies";
import Community from './components/Community';
import Signup from './components/signup';
// import {Movies, Home, Login} from "./components";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="overlayer"></div>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/community' element={<Community />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
