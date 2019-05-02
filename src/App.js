import React from 'react';
import './App.css';
import F from './Fancy'
import SearchResult from './components/SearchResult'
import OnOffButton from './components/OnOffButton'
import Counter from './components/Counter'
import ThreeSearchResults from './components/ThreeSearchResults'
import Checkbox from './components/Checkbox'
import CipherText from './components/CipherText'
import Tabs from './components/Tabs'
import AjaxComponent from './components/AjaxComponent';
import Fruits from './components/Fruits'
import ShowCities from './components/ShowCities'
import Cities from './components/Cities'
import ShowCitiesListElements from './components/showCitiesListElements'
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
const steps = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};
const associatedPress = {
    news: 'This is the news: some neeews.This is the news: some neeewsThis is the news: some neeews',
    entertainment: 'Some celebrities did something.Some celebrities did something.Some celebrities did something',
    sports: 'Man utd won or lost. we dont know.Man utd won or lost. we dont know.Man utd won or lost. we dont know.'

};

const bgColors = {
    "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42",
}; // eslint-disable-next-line

const citiesArray = [
    {city: 'London', pop:8000000},
    {city: 'Gotenburg', pop:700000},
    {city: 'New York', pop:9000000},
];
function App() {
    return (
        <div>
            <Cities/>
            <ShowCitiesListElements/>

             <Fruits/>
            <AjaxComponent/>
            <Tabs>
                <div> {associatedPress.news}</div>
                <div> {associatedPress.sports}</div>
                <div> {associatedPress.entertainment}</div>
            </Tabs>
            <CipherText transform={steps.three}/>
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


