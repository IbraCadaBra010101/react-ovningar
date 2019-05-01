import React from 'react';

const SearchResult = (props) => {
    return <div>
        <div><h1>Title: {props.googleRes.title}</h1><p>Link: {props.googleRes.link}</p><p>Description:{props.googleRes.result[2]}</p></div>
    </div>

};

export default SearchResult;
// 4a Skapa en komponent med namnet SearchResult. Den ska rendera JSX som ser ut som ett sökresultat som man får
// från en sökmotor: titel, länk och kort beskrivning av sidan. Poängen är att träna på att skriva lite mer komplicerad JSX.

