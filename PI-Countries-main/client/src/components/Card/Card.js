import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom';
export default function Card(props){
    const { id, name, image, continents, capital, area, subregion, population, onClose } = props;
    return(
    <div className={style.container && style.card} >
        <div >
        
        <Link className={style.txt} to = {`/detail/${id}`}>
        <h1 className= {style.h1}>Pais: {name}</h1>
        <hr/>
        <img className={style.img} src={image} alt="Card" />
        </Link>
        </div>
    </div>)
    ;
}