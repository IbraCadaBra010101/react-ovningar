import React, {Component} from 'react';

class CipherText extends Component {
    state = {
        input: ''
    };
    displayKeys = event => {
        this.setState({input: String.fromCharCode(event.charCode + this.props.transform)});
    };

    render() {
        return <div><input type="text" onKeyPress={this.displayKeys} value={this.state.input}/></div>
    }
}

export default CipherText;

