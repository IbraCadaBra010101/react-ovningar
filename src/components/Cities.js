import React from 'react';
import ShowCities from './ShowCities'
import ShowCitiesListElements from "./showCitiesListElements";
// passing this child to its parent ShowCities
const Cities = () => {
    const CitiesArray = [
        {city: 'London', popl: 8000000},
        {city: 'Gotenburg', popl: 700000},
        {city: 'New York', popl: 9000000},
    ];
    return <div>
        <ShowCities cities={CitiesArray}/>
        <ShowCitiesListElements>
            <li>
                {CitiesArray[0].city}: {CitiesArray[0].popl}
            </li>
            <li>
                {CitiesArray[1].city}: {CitiesArray[1].popl}
            </li>
            <li>
                {CitiesArray[2].city}: {CitiesArray[2].popl}
            </li>
        </ShowCitiesListElements>
    </div>
};

export default Cities;

//2a Skapa en lista med objekt som representerar städer.

//Objekten ska ha namn och antal invånare.

//Gör en komponent som tar emot listan med props
// och renderar den som ett <ul> element.

//2b Dela upp komponenten i två, genom att skapa en komponent som kan rendera ett <li> element.
