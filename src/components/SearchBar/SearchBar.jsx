import style from "./SearchBar.module.css"
import  { useState } from 'react'

const SearchBar = ({ onSearch }) => {


   const [character, setCharacter] = useState('');
 
   const handleInputChange = (event) => {
      setCharacter(event.target.value);
    };

    const handleSearch = (event) => {
      event.preventDefault();
      onSearch(character);
      setCharacter('');
    };
 
   return (
     <form onSubmit={handleSearch} className={style.Barra}>
       <input className={style.Buscador}
         type='text'
         value={character}
         onChange={handleInputChange}
         placeholder='Buscar personaje'
       />
       <button className={style.BotonAgregar}  type='submit'>Agregar</button>
     </form>
   );
 };
 
 export default SearchBar;

