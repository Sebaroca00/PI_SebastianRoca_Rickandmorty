import React from 'react'
import style from './Favorites.module.css'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../Redux/action'
import { useState } from 'react'

const Favorites = (props) => {
    
     const {myFavorites} = props;
     const dispactch = useDispatch;
     const [aux, setAux] = useState(false);

     const handleOrder=(e) =>{
        dispactch(orderCards(e.target.value))
        setAux(!aux)
     }

     const handleFilter = (e)=>{
      dispactch(filterCards(e.target.value))
     }


    return (
        <div className={style.Contenedor}>
             <div>
              <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>
              <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="uknown">Uknown</option>
              </select>
             </div>
       {myFavorites && 
       myFavorites.map((char) => (
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