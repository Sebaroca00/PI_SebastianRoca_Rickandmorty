import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css'


 
const Nav = (props) =>{
  const {onSearch} = props;

  

    return(
      <div className={style.Contenedor}>
        <Link className={style.Link} to="/about">About</Link>
        <Link className={style.Link}  to="/home">Home</Link>
        <Link className={style.Link}  to={"/favorites"}> Favorites</Link>
        <SearchBar onSearch={onSearch}/>
      </div>
    )
  }

 export default Nav;

 