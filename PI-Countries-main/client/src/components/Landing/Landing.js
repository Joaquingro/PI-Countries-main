import style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import load from "../Images/load.png"

export default function Landing(){
    return(
    <div className= {style.app}>
      <div className= {style.div}>
        <h1 className= {style.h1}>
          <Link className= {style.decoration} to= "/">
          <img className= {style.img} src = {load} alt = ""/>
          Total Mundo
          </Link>
          <div className={style.link && style.left}>
          <Link className={style.linki} to = "/about">Conóceme</Link>
          </div>
          </h1>
      </div>
          
      <h2 className = {style.animation}>Bienvenidos a<br/> Total Mundo,
        un espacio <br/>dedicado a todos los<br/> países del 
        mundo... 
      </h2>

      <Link className ={ style.button }  to = "/home">Iniciar Aventura</Link>

    </div>
    );
}