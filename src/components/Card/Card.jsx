import { connect } from "react-redux";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";



 function Card(props) {
  const{
    id, 
    name, 
    status, 
    species, 
    gender, 
    origin, 
    image,
    onClose,
    addFav,
    removeFav, 
    myFavorites
  } = props;

  const [isFav, setIsFav]= useState(false)

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav)
  }


  return (
     <div className={style.Carta}>
      {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
        ) : (
            <button onClick={handleFavorite}>🤍</button>
        )}
         <button className={style.Boton} 
          onClick={() => {
            onClose(id)}}>
            X
            </button>
            <div className={style.AllDatos}>
        <Link to={`/detail/${id}`}>
        <h2 className={style.Datos}>Name: {name}</h2>
        </Link>
        <h2 className={style.Datos}>Status: {status}</h2>
        <h2 className={style.Datos}>Specie: {species}</h2>
        <h2 className={style.Datos}>Gender: {gender}</h2>
        <h2 className={style.Datos}>Origin: {origin}</h2>
        </div>
        <img className={style.Imagen} src={image} alt="" />
     </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);