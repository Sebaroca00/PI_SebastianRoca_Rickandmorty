import style from "./SearchBar.module.css"
import  { useState } from 'react'


const SearchBar = ({ onSearch }) => {
   const [ id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
    };

   
   // const handleSearch = (event) => {
   //   setId(event.target.value);
   // };
   return (
   <div className={style.Barra}>
     
       <input className={style.Buscador} type='search' onChange={handleChange} value={id}/>    
       <button className={style.BotonAgregar}  
               onClick={() =>{
                onSearch(id)
                }}
                >
            Agregar
        </button>
       
     
   </div>
   );
 };
 
 export default SearchBar;

