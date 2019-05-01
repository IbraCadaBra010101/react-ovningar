import React, {Component} from 'react';

class ThreeSearchResults extends Component {
    state = {
        resultItem: [{
            link: 'stackoverflow.com',
            title: 'ES5',
            result: 'Article about ES5'
        },
            {
                link: 'google.com',
                title: 'ES6',
                result: 'Article about ES6'
            },
            {
                link: 'wiki.com',
                title: 'ES7',
                result: 'Article about ES7'
            },]
    };


    render() {
        return (<div>{this.state.resultItem.map(el => {
            return <div><p>Link: {el.link}</p><p>Title: {el.title}</p><p>Result: {el.result}</p></div>

        })}</div>)
    }
}

export default ThreeSearchResults;

// 5 Skapa en komponent med namnet ThreeSearchResults,
// som ska rendera tre stycken "sökresultat"
// genom att rendera SearchResult tre gånger.
// Ska den vara en funktionell komponent eller en klass?
