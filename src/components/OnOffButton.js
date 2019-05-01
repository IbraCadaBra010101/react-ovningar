import React, {Component} from "react";

class OnOffButton extends Component {

    state = {offOn: false};

    onAndOff = () => {
        this.setState({offOn: this.offOn =! this.offOn});
        console.log(this.state.offOn);
    };

    render() {
        return (<div>
            <button onClick={this.onAndOff}>Press here to toggle</button>
        </div>)

    }
}

export default OnOffButton;

// 6a Skapa en ny komponent med namnet OnOffButton i en egen fil.
// Komponenten ska vara en klass som har en boolean med namnet isOn
// i state. (stateful component) Gör så att knappen visar texten
// "På" om isOn är true och "Av" annars. (conditional rendering)
//
// 6b Gör så att man kan byta state genom att klicka på knappen.
// Använd funktionen this.setState.
