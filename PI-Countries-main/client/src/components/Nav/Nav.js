import { Link } from 'react-router-dom';
import style from '../Nav/Nav.module.css';
import img from "../Images/Mundito.png"

export default function Nav(){
    return (
    <div className= {style.container}>
    
          <Link className= {style.decoration} to= "/">
        <div className={style.div}>
         <h1 className= {style.h1}>
          <img className= {style.img2} src = "https://images.vexels.com/media/users/3/158194/isolated/preview/11507ef5615c554fe88fc22c86768501-icono-de-tierra-simple.png" alt = ""/>
          Total Mundo
          </h1>
          </div>
          </Link>

        
        <div className={style.container2}>
        <Link className={style.p}to = "/home">
        <h3>Inicio</h3>
        <img className = {style.img} src={img} alt = "Mundo"/>
        </Link>
        <div className={style.menu}>
            <ul>
            <Link className = {style.link} to ="/about">
                <li>Acerca de mi</li>
                </Link>
                <Link className = {style.link} to = "/form">
                <li>Crea una actividad turística</li>
                </Link>
            </ul>
        </div>
        </div>
    </div>
    );
}