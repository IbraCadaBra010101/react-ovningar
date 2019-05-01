import React, {Component} from 'react';

class CheckBox extends Component {
    state = {
        isChecked: false,
        inputClosed: true
    };

    change = () => {
        this.setState({
            isChecked: !this.state.isChecked,
            inputClosed: !this.state.inputClosed
        })
    };

    render() {
        return <p><input type="checkbox" onChange={this.change} checked={this.state.isChecked}/>
            <input type="text" disabled={this.state.inputClosed}/>

        </p>
    }
}

export default CheckBox;

// 8 Skapa en komponent som visar ett textfält och en kryssruta.
// Om kryssrutan är blank ska man inte kunna skriva i textfältet.
// (Använd attributet disabled)
