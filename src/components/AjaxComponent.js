import React, {Component} from 'react';
import axios from 'axios';

class AjaxComponent extends Component {
    // initial state
    url = 'https://forverkliga.se/JavaScript/api/simple.php?';
    key = '&key=value';
    state = {
        error: null,
        data: [],
        isLoaded: false,
    };

    // when component is mounted on the DOM..
    componentDidMount() {
        axios.get(this.url + this.key) // parse to JSON if necessary
        // set the state here
            .then((res) => {
                    console.log(res.data);
                    this.setState({
                        data: res.data,
                        isLoaded: true,
                    });
                    console.log(this.state.data)
                }, // catch the error
                (error) => {
                    this.setState({
                        error: error,
                        isLoaded: true,
                    });
                }
            )
    }

    render() {
        const {error, data, isLoaded} = this.state;
        if (error) {
            return <p>{error}</p>
        } else if (!isLoaded) {
            return <p>is loading ...</p>
        } else {
            return (
                <li>{data.message}: {data.time}</li>
            );
        }
    }
}


export default AjaxComponent;

//11 Skapa en komponent med namnet AjaxComponent. När komponenten har
// renderats (använd livscykelmetoden componentDidMount) så ska ni göra ett
// AJAX GET request till https://forverkliga.se/JavaScript/api/simple.php
// // med key=value i querystring.
// När AJAX returnerar ska resultatet sparas i klassen med setState.
// Använd "conditional rendering" för att visa resultatet.
