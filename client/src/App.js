import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './App.module.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = '';
  const password = '';
  const URL = "http://localhost:3001/rickandmorty/character"

  function login(userData) {
    if (userData.password === password && userData.email === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  const onSearch = (id) => {
    axios(`${URL}/${id}`).then(({ data }) => {
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
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  return (
    <div className={style.App} style={{ padding: '25px' }}>
      {pathname !== '/' && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
