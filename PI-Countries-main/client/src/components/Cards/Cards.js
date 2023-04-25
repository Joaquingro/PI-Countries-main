import style from '../Cards/Cards.module.css'
import Card from '../Card/Card';

export default function Cards(props){
    const { onClose, searchCountry } = props;
    return(
    <div >
        {searchCountry && searchCountry.map((country, index) => {
            return <Card
            key = {index}
            id = {country.id}
            name = {country.name}
            image = {country.image}
            continents = {country.continents}
            capital = {country.capital}
            area = {country.area}
            population = {country.population}
            onClose = {() => onClose(country.id)}
            />
        })}
    </div>
    
    
    );
}