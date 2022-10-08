import { useState } from 'react';
import {Routes , Route, useNavigate} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import AbouteUs from './AbouteUs';
import './App.css';
import Contact from './Contact';
import Description from './Description';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Products from './Products';
import Profile from './Profile';
import Settings from './Settings';


function App() {

  const [list] = useState([
    {
      id:uuidv4(),
      name : "Product 01",
      description : " description Product 01"
    },
    {
      id:uuidv4(),
      name : "Product 02",
      description : " description Product 02"
    },
    {
      id:uuidv4(),
      name : "Product 03",
      description : " description Product 03"
    },
    {
      id:uuidv4(),
      name : "Product 04",
      description : " description Product 04"
    },
    {
      id:uuidv4(),
      name : "Product 05",
      description : " description Product 05"
    },
  ])
  
  const navigate = useNavigate()

  const getProfiel = () => {
    if (true) {
      navigate('/Profil')
    }else{
      navigate('*')
    }
  }


  return (
    <div className="App">
      <NavBar></NavBar>
      <button onClick={getProfiel} > Get Profile </button>
      
      
      <Routes>
        <Route path='/' element={ <h1> Welcome to home page </h1> } />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/AbouteUs' element={<AbouteUs/>} />
        <Route path='/Profil' element={<Profile/>} > 
          <Route path='settings' element={<Settings/>}/>     
        </Route>
        <Route path='/Products' element={<Products list={list}/>} />
        <Route path='/Products/:ProdId' element={<Description Prodlist={list}/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </div>
  );
}

export default App;
