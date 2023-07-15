import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
const URL = "http://localhost:3001/rickandmorty/character"

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
 
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);
  
  const onSearch = async (id) => {
    try {
      const { data } = await axios(`${URL}/${id}`);
      if (data.name) {
        setCharacters([...characters, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

 const onClose = (id) => {
  const filtered = characters.filter((chars) => chars.id !== id);
  setCharacters(filtered);
};

const login = async (userData) => {
  const URL = "http://localhost:3001/rickandmorty/login/";
  try {
    const { email, password } = userData;
    const { data } = await axios(
      `${URL}?email=${email}&password=${password}`
    );
    const { access } = data;
    setAccess(access);
    access && navigate("/home");
  } catch (error) {
    console.log(error);
  }
};


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
