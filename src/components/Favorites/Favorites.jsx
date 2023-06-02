import React from 'react'
import style from './Favorites.module.css'
import { connect } from 'react-redux'
import Card from '../Card/Card'

const Favorites = (props) => {
    
     const {myFavorites} = props;

    return (
        <div className={style.Contenedor}>
             
       {myFavorites.map((char) => (
         <Card
          key={char.id}
          id= {char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
         />
       ))}
     </div>
        
    )
}

const mapStateToProps = (state) => {
    return{
      myFavorites: state.myFavorites,
    };
  };

export default connect(mapStateToProps, null)(Favorites);