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
// 9a Skapa en komponent med namnet CipherText. När man trycker ner en tangent för en bokstav i fältet så ska nästa bokstav användas
// i stället. Exempel: användaren trycker "a", men i fältet läggs det till ett "b"; "b" blir "c" osv.

// 9b Utöka komponenten så att den tar ett attribut med namnet transform (props alltså) som talar om hur
// många steg man ska gå från bokstaven som skrevs in. <CipherText transform={1} />
// blir alltså samma som förut. Men transform=3 gör att "a" blir "d" osv.
