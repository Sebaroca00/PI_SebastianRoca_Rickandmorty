import style from "./Card.module.css"
import { Link } from 'react-router-dom'

const Card = ({ character, name, species, gender, image, onClose }) => {
  return (
   
      <div className={style.Carta}>
        <button onClick={() => onClose(character.id)} className={style.Boton}>
          X
        </button>

        <Link to={`/detail/${character.id}`} >
          <h2 className={style.Datos}>Nombre: {name}</h2>
        </Link>  

        <h2 className={style.Datos}>Especie: {species}</h2>
        <h2 className={style.Datos}>Género: {gender}</h2>
        <img className={style.Imagen} src={image} alt="" />
      </div>
    
  );
};

export default Card;
