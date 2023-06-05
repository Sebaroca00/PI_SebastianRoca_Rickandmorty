import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


 
const Nav = (props) =>{
  const {onSearch} = props;

  

    return(
      <div>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to={"/favorites"}> Favorites</Link>
        <SearchBar onSearch={onSearch}/>
      </div>
    )
  }

 export default Nav;

 