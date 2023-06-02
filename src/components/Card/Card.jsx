import style from "./Card.module.css"
import '../../App'

export default function Card(props) {
  const{id, name, status, species, gender, origin, image, onClose} = props;

  return (
     <div className={style.Carta}>
       <button className={style.Boton} 
          onClick={() => {
            onClose(id)}}>
            X
            </button>
            <div className={style.AllDatos}>
        <h2 className={style.Datos}>Name: {name}</h2>
        <h2 className={style.Datos}>Status: {status}</h2>
        <h2 className={style.Datos}>Specie: {species}</h2>
        <h2 className={style.Datos}>Gender: {gender}</h2>
        <h2 className={style.Datos}>Origin: {origin}</h2>
        </div>
        <img className={style.Imagen} src={image} alt="" />
     </div>
  );
}
