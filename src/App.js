import style from './App.module.css';
import { useState } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';


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
        <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

