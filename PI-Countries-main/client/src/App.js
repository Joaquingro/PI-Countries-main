import './App.css';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import axios from 'axios';
import { useState } from 'react';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Form from './components/Form/Form';
// axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.baseURL = 'https://pi-countries-main-production-2713.up.railway.app/';


function App() {

const location = useLocation();
const [searchCountry, setSearchCountry ] = useState([]);
const navigate = useNavigate();

const onSearch = async (name) => {
 const response = await axios.get(`/countries/byName?name=${name}`);
 const data = response.data;
 
  setSearchCountry(data);
}



const backHome = () =>{
  navigate("/home");
} 
const backLanding = () => {
  navigate("/");
}  

  return (
   
      <div>
    {location.pathname === "/" ? <Landing /> : <Nav backHome = { backHome }/>}
    <Routes>
    <Route path= "/form" element = {<Form backHome = {backHome} />}></Route>
    <Route path = "/about" element = {<About />}></Route>
    <Route path= "/home" element = {<Home backLanding = { backLanding } setSearchCountry = {setSearchCountry} searchCountry = {searchCountry} onSearch = {onSearch}/>}></Route>
    <Route path= "/detail/:id" element = {<Detail />}></Route>
    </Routes>

    <footer className= 'footer'>PI Countries | Desarrollado por Joaquin Guerrero |
    <a href = "https://www.linkedin.com/in/joaquin-guerrero-728826260/">
      <img className = "img" src = "https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png" alt = "LinkedIn"/>
      </a>
      <a href = "https://github.com/Joaquingro">
      <img className= 'img2' src ="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png" alt = "Github"/>
      </a>
    </footer>
   </div>
    
    
  );
}



export default App;
