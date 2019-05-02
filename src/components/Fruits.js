import React, {Component} from 'react'

class Fruits extends Component {
    fruits = ['banana', 'tomato', 'apple', 'orange'];

    render() {
        return this.fruits.map(el => {
             return <ul>
                 <li key={el}>{el}</li>
             </ul>
        });
    }

}

export default Fruits;

//1 Skapa en array med frukter. (alltså string[])
// Skapa en komponent med namnet Fruits som renderar
// ett <ul> element som visar alla frukterna i varsitt <li> element.
