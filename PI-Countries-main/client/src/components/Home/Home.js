import style from './Home.module.css';
import Cards from '../Cards/Cards';  
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Selector from '../Selector/Selector';
import { getAllCountries } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import popu from "../Images/popu.png";
import glob from "../Images/globito.png"
import load from "../Images/load.png";


export default function Home(props) {

    const { setSearchCountry, searchCountry, onSearch } = props;
    const [loading, setLoading] = useState(true);
    const [country, setCountry ] = useState([]);
    const [orden, setOrden] = useState("");
    const [currentPage, setCurrentPage ] = useState(1);
    
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);

    const filteredCountries = useSelector(state => {
    if (state.filteredCountries.length === 0) {
        return state.allCountries;
        }
        return state.filteredCountries;
    });

    
    const filterAndOrder =  (country, order, orden) => {
        let actividyCountries;
        if(order === "activity"){
            actividyCountries = country.slice().filter((conti => {
            return conti.activities.some(act => act.name === orden);
            }));
            }else if(order === "continent"){
                actividyCountries = country.slice().filter((conti => {
                    return conti.continents === orden; 
                 }));
            }else {
                actividyCountries = country;
            }
        
        
        let sortedCountries; 
            if (order === "name") {
                sortedCountries = country.slice().sort((a, b) => {
                return orden === "ascendente" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);  
             });
            } else if (order === "population") {
                sortedCountries = country.slice().sort((a, b) => {
                    return orden === "ascendente" ? b.population - a.population : a.population - b.population;
                 });
               
            } else {
                return sortedCountries = actividyCountries;
            }
     
        return sortedCountries;
    }
    
    let filterAndOrderCountries = filterAndOrder(country, order, orden)
   
    
    const getCountries = async () => {
    
   
    const response = await axios.get(`/countries`);
    const data = response.data;
    dispatch(getAllCountries(data));
    }

    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted) setLoading(false);
        }, 3000);
        if (isMounted) setCountry(filteredCountries);
        return () => { isMounted = false };
    }, [filteredCountries]);

    useEffect( () => {
        let isMounted = true;
        getCountries().then(() => {
            if (isMounted) setLoading(false);
        });
        return () => { isMounted = false };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    


    return(
        <div className={style.loading}>
             {loading ? (
                <div className={style.loadingdiv}>
                   <p className={style.loadingp}> Cargando países...</p>
        <img className = {style.animation}src ={load} alt = "loading"></img>
        </div>
      ) : (
    <div className = {style.body}>
        <div className={style.fatherStart}>
            <div className={style.start}>
             <h1>¡Comencemos la aventura!</h1>
            </div>

            <SearchBar onSearch = {onSearch}/>
            
           <div className={style.select}>
            <Selector orden = {orden} setSearchCountry = {setSearchCountry} setCurrentPage = {setCurrentPage} setOrden = {setOrden}/>
           </div>
            
         </div>
         <div className= {style.buttons}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
        </button>
        <button>{currentPage}</button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === 25}>
         Siguiente
        </button>
        </div>
        
         
        <div className={style.container}>

            <Cards country={searchCountry.length === 0 ? filterAndOrderCountries : []} />
            {searchCountry.length > 0 ? searchCountry.map((cont, index) => (
            <div className={style.card} key = {index}>
            <Link className={style.txt} to = {`/detail/${cont.id}`} key = {cont.id}>
            <h2 className= {style.h1}><img src={glob} alt=
            "popu"/> &nbsp;&nbsp;&nbsp;&nbsp;País: {cont.name}</h2>
            
            <img className={style.img} src = {cont.image} alt = {cont.name}/>
            <p className={style.p}>Población: <img src={popu} alt=
            "popu"/> {cont.population}</p>
            <p className={style.p}>Continente: {cont.continents}</p>
            </Link>
            </div>
        )).slice((currentPage - 1) * 10, currentPage * 10) : filterAndOrderCountries.map((cont, index) => (
             <div className={style.card} key={index}>
            <Link className={style.txt} to = {`/detail/${cont.id}`} key = {cont.id}>
            <h2 className= {style.h1}><img src={glob} alt=
            "popu"/>&nbsp;&nbsp;&nbsp;&nbsp;País: {cont.name}</h2>
           
            <img className={style.img} src = {cont.image} alt = {cont.name}/>
            <p className={style.p}>Población: {cont.population} <img src={popu} alt=
            "popu"/></p>
            <p className={style.p}>Continente: {cont.continents}</p>
            </Link>
            </div>
        )).slice((currentPage - 1) * 10, currentPage * 10)}
        </div>
        <div className= {style.buttons}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
        </button>
        <button>{currentPage}</button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === 25}>
         Siguiente
        </button>
        </div>
        </div>
      )}
        </div>
    );
}