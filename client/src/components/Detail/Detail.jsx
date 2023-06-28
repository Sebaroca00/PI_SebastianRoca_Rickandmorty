import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css'
const URL = "http://localhost:3001/rickandmorty/character"

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

useEffect(() => {
   axios(`${URL}/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

 return (
   <div >
   <div className={style.ImagenContainer}>
     <img className={style.Imagen} src={character.image} alt={character.name} />
   </div>
   <div className={style.Contenedor}>
     <h2 className={style.Nombre}>{character.name}</h2>
     <h3 className={style.Datos}>Status: {character.status}</h3>
     <h3 className={style.Datos}>Species: {character.species}</h3>
     <h3 className={style.Datos}>Gender: {character.gender}</h3>
     <h3 className={style.Datos}>Origin: {character.origin?.name}</h3>
   </div>
 </div>
);
};

export default Detail;
