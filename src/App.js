import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import style from './App.module.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'

function App() {

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        // Verificar si el personaje ya existe en el array
        const characterExists = characters.some((character) => character.id === data.id);
        if (characterExists) {
          window.alert('Ya se agregó esa carta');
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  };
  
  
const onClose = (id) => {
    setCharacters (characters.filter((char) =>{
      return char.id !== Number(id)
    }))
  }

  return (
    <div className={style.App} style={{ padding: '25px' }}>
        <Nav onSearch={onSearch} />
        
     <Routes>
      <Route path= "/about" element={<About/>}/>
      <Route path= "/home" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path= "/detail/:id" element={<Detail/>}/>
        </Routes>
          
      
    </div>
  );
}

export default App;

