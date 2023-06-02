import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

 
const Nav = (props) =>{
  const {onSearch} = props;

  

    return(
      <div>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
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
 