import React from 'react'
import style from './Favorites.module.css'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../redux/actions/actions'
import { useState } from 'react'

const Favorites = ({myFavorites}) => {
    
    
     const dispactch = useDispatch();
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
             {myFavorites.map(({ id, name, image, gender }) => {
				return <Card id={id} name={name} image={image} gender={gender} />
			})}
     </div>
        
    )
}

const mapStateToProps = (state) => {
    return{
      myFavorites: state.myFavorites,
    };
  };

export default connect(mapStateToProps, null)(Favorites);