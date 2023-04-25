const axios = require('axios');
const URL = 'https://restcountries.com/v3/all';
const { Country } = require('../db');


const getApiData = async () => {
    try {
        
        let getCountries = await axios.get(URL);
        
        const countries = getCountries.data.map(char => ({
            id: char.cca3,
            name: char.name.common,
            image: char.flags[0],
            continents: char.region,
            capital: char.capital?.[0] || "Desconocido",
            subregion: char.subregion,
            area: char.area,
            population: char.population
        }))
        
        return countries;
    } catch (error) {
        return {error: error.message};
    }
}

const saveApiData = async () => {
    try {
        const allCountries = await getApiData();
        await Country.bulkCreate(allCountries);
        return allCountries;
        
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {getApiData, saveApiData};