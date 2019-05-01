import React, {Component} from 'react';

class Counter extends Component {
    state = {counter: 0};
    inc = () => {
        this.setState({counter:this.state.counter +1});
    };
    dec = () => {
        this.setState({counter: this.state.counter-1});
    };
    reset = () => {
        this.setState({counter: 0});
    };

    render() {
        return <div><div><button onClick={this.inc}>increment {this.state.counter}</button></div>
               <div><button onClick={this.dec}>decrement {this.state.counter}</button></div>
               <div><button onClick={this.reset}>reset {this.state.counter}</button></div>
               </div>
    }
}

export default Counter;
