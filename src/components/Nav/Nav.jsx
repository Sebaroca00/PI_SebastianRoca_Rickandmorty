import React from 'react';
//import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
//import style from './Nav.module.css'
 
const Nav = (props) =>{
  const {onSearch} = props;

  

    return(
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
    )
  }

 export default Nav;
/*
const Nav = ({onSearch}) => {

    return (
      <Nav className={style.Contenedor}>      
      <div className={style.Navegador}>
       <h3 className={style.Link}><Link to="/About">About</Link></h3> 
        <h3 className={style.Link}><Link to="/home">Home</Link> </h3>    
       
        <SearchBar onSearch={onSearch}/> 
        </div>
      </Nav>
    );
  };
  */
 