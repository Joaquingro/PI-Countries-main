import style from '../About/About.module.css';
import img from "../Images/Joaquin.jpeg";
import react from "../Images/React.png";
import redux from "../Images/redux.png";
import css from "../Images/css.png";
import html from "../Images/HTML.png";
import js from "../Images/JS.png";
import post from "../Images/Post.png";
import express from "../Images/express.png";
import load from "../Images/load.png";

import { useEffect, useState } from 'react';

export default function About(props){

    const [loading, setLoading] = useState(true);


    useEffect(() => { 
        setTimeout(() => setLoading(false), 2000);
        window.scrollTo(0, 0);
      }, []);

    return(
    <div className={style.loading}>
         {loading ? (
          <div className={style.loadingdiv}>
          <p className={style.loadingp}> Cargando yo...</p>
        <img className = {style.animation} src ={load} alt = "loading"></img>
</div>
      ) : (
    <div>
        <div className = {style.container}>

        <img src= {img} alt = "Joaquin"/>
            <div>
        <h2>¡Hola!</h2>
        <h1>Mi nombre es Joaquin Guerrero</h1>
        <h3>Creador de esta App Total Mundo</h3>
        <p>Conoce más de mi:  
        </p>
        <a href = "https://www.linkedin.com/in/joaquin-guerrero-728826260/">
        <img className = {style.link} src = "https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png" alt = "LinkedIn"/></a>
            </div>
        </div>

        <div className={style.techH1}>
        <h1>Tecnologías que use para la App Total Mundo</h1>
       
        <div className={style.tech}>
        <div className = {style.techItem}>
            <h2>React</h2>
            <img className = {style.react} src={react} alt = ""/>
        </div>
        <div className = {style.techItem}>
        
            <img className = {style.redux} src={redux} alt = ""/>
        </div>
        <div className = {style.techItem}>
            <img className = {style.css} src={css} alt = ""/>
        </div>
        <div className = {style.techItem}>
            <img className = {style.html} src={html} alt = ""/>
        </div>
        <div className = {style.techItem}>
            <img className = {style.js} src={js} alt = ""/>
        </div>
        <div className = {style.techItem}>
            <img src={post} alt = ""/>
        </div>
        <div className = {style.techItem}>
            <img className = {style.node} src={express} alt = ""/>
        </div>

        </div> 
        </div>
        
     </div>
      )}
    </div>
    );
}