import style from "../Selector/Selector.module.css";
import { filterByActivity, filterByContinent, orderByAlfabet, orderByPoblation, resetCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Selector(props){
    const dispatch = useDispatch();
    const {setOrden, setSearchCountry, setCurrentPage} = props;
    const [selectValues, setSelectValues] = useState({
        continent: "",
        activity: "",
        alfabet: "",
        population: ""
      });

      const resetStates = () => {
        setSearchCountry([]);
        setCurrentPage(1);
        dispatch(resetCountries());
        setOrden("");
        setSelectValues({
            continent: "",
            activity: "",
            alfabet: "",
            population: ""
        })
    };

    const handleByContinent = (event) => {
        const value = event.target.value;
        dispatch(filterByContinent(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            continent: value
        })

        
    }

    const handleByActivity = (event) => {
        const value = event.target.value;
        dispatch(filterByActivity(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            activity: value
        })

        
    }

    const handleByAlfabet = (event) => {
        const value = event.target.value;
        dispatch(orderByAlfabet(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            alfabet: value
        })

    }
    const handleByPoblation = (event) => {
        const value = event.target.value;
        dispatch(orderByPoblation(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            population: value
        })
    }


    return (
    <div className={style.containerFather} >
        <button className={style.restore} onClick = {() => {resetStates()}} >Restaurar orden</button>



    
        <select className={style.container} onChange = {handleByContinent} name="continent" value ={selectValues.continent}>
            <option value = "">Filtrar por Continente:</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
        </select >
       
        <select className={style.container} onChange = {handleByActivity} name="activity" value ={selectValues.activity}>
            <option value = "">Filtrar por Actividad:</option>
                <option value = "Playa">Playa</option>
                <option value = "Viaje en Globo">Viaje en Globo</option>
                <option value = "Esquiar">Esquiar</option>
                <option value = "Explorar Museos">Explorar Museos</option>
                <option value = "Kayak">Kayak</option>
                <option value = "Camping">Camping</option>
                <option value = "Montar a caballo">Montar a caballo</option>
                <option value = "Recorrido en cuatrimoto">Recorrido en cuatrimoto</option>
                <option value = "Aventura en la selva">Aventura en la selva</option>
        </select>
        
    


   
        
        <select className={style.container} onChange={handleByAlfabet} name="alfabet" value ={selectValues.alfabet}>
            <option value = "">Ordenar Alfabeticamente:</option>
            <option value="ascendente">A-Z</option>
            <option value="descendente">Z-A</option>
        </select>
        
        <select className={style.container} onChange={handleByPoblation} name="population" value ={selectValues.population}>
            <option value = "">Ordenar por Población:</option>
            <option value="ascendente">Mayor población</option>
            <option value="descendente">Menor población</option>
        </select>
        
    
</div>

);
}


