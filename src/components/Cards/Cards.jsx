import Card from '../Card/Card';
import style from "./Cards.module.css"


const Cards = ({ characters, onClose }) => {
   return (
     <div className={style.Contenedor}>
       {characters.map((character) => (
         <Card
           key={character.id}
           character={character}
           name={character.name}
           species={character.species}
           gender={character.gender}
           image={character.image}
           onClose={onClose}
         />
       ))}
     </div>
   );
 };

export default Cards;