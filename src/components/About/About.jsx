import style from "./About.module.css";
import Foto from '../Img/Foto About.jpg' 

const About = () => {
    return(
        <div className={style.Contenedor}> 
        <hr />
            <h2 className={style.Title}>Bienvenidos a mi Proyecto Integrador</h2>
            <div>
                
                    <div className={style.ContenedorDatos}>
                        <h3 className={style.Datos}>Nombre: Sebastian Roca</h3>
                        <h3 className={style.Datos}>Pais: Argentina</h3>
                        <h3 className={style.Datos}>Edad: 22 Años</h3>
                        <img className={style.Foto} src={Foto} alt="">
                </img>
                    </div>
                
            </div>
            
        
        <hr />
        </div>
    )
}


export default About;