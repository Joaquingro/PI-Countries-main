import { useParams } from 'react-router-dom';
import style from '../Detail/Detail.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Detail(props){
    
    const { id } = useParams();
    const [ country, setCountry ] = useState({});

   
    const getCountries = async () => {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        const data = response.data;
        setCountry(data);
        }

    useEffect( () => {
        getCountries();
        window.scrollTo(0,0)
    }, [])
    return (
    <div className={style.father}>
        <div className={style.container}>
        <div className={style.txt2}>
        <h2>Nombre: {country.name}</h2>
        </div>
        <div className={style.fatherImg}>
        <img className = {style.img} src= {country.image} alt= {country.name}/>
        </div>
        <div className={style.txt}>
        <h3>ID: {country.id}</h3>
        <h4>Continente: {country.continents}</h4>
        <h4>Capital: {country.capital}</h4>
        <h4>Subregion: {country.subregion}</h4>
        <h4>Área: {country.area}</h4>
        <h4>Población: {country.population}</h4>
        </div>
        </div>
    </div>
    );
}