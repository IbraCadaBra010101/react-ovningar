import React from 'react';
import './App.css';
import F from './Fancy'
import SearchResult from './components/SearchResult'
import OnOffButton from './components/OnOffButton'
import Counter from './components/Counter'
import ThreeSearchResults from './components/ThreeSearchResults'
import Checkbox from './components/Checkbox'
import CipherText from './components/CipherText'

const text = 'Hell I just sent this from the app component';
const colorObject = {
    green: 'green',
    red: 'red',
    blue: 'blue'
};

const googleRes = {
    result: ['yes', 'no', 'dumb question', 'whaat?'],
    link: 'www.google.com',
    title: 'is google google?'
};

function App() {

    return (

        <div>
            <CipherText transform={3}/>
            <Checkbox/>
            <Counter/>
            <OnOffButton/>
            <ThreeSearchResults/>
            <SearchResult googleRes={googleRes}/>
            <F text={text} color={colorObject.green}/>
            <F text={text} color={colorObject.red}/>
            <F text={text} color={colorObject.blue}/>
            <h1>Hello</h1>
        </div>
    );
}

export default App;


