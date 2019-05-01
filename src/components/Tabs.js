import React, {Component} from 'react';


class Tabs extends Component {
    state = {
        newsMode: 'newsMode'
    };

    bgColors = {
        "Default": "#81b71a",
        "Blue": "#00B1E1",
        "Cyan": "#37BC9B",
        "Green": "#8CC152",
        "Red": "#E9573F",
        "Yellow": "#F6BB42",
    };

    news = () => {
        this.setState({newsMode: 'newsMode'})
        //

    };
    sports = () => {
        this.setState({newsMode: 'sportsMode'})
        // return <div>{associatedPress.sports}</div>

    };
    entertainment = () => {
        this.setState({newsMode: 'entertainment'})

    };

    render() {
        if (this.state.newsMode === 'newsMode') {
            return <div>
                <button onClick={this.news} style={{background: this.bgColors.Red}}>news</button>
                <button onClick={this.sports}>sports</button>
                <button onClick={this.entertainment}>entertainment</button>

                <div>{this.props.children[0]}</div>
            </div>

        } else if (this.state.newsMode === 'sportsMode') {
            return <div>
                <button onClick={this.news}>news</button>
                <button onClick={this.sports} style={{background: this.bgColors.Red}}>sports</button>
                <button onClick={this.entertainment}>entertainment</button>

                <div>{this.props.children[1]}</div>
            </div>
        } else if (this.state.newsMode === 'entertainment') {
            return <div>
                <button onClick={this.news}>news</button>
                <button onClick={this.sports}>sports</button>
                <button onClick={this.entertainment} style={{background: this.bgColors.Red}}>entertainment</button>

                <div>{this.props.children[2]}</div>
            </div>

        }
    }
}

export default Tabs;


// 10a Skapa en komponent för att visa flikar. När man klickar på olika
// flikar ska olika innehåll visas. Använd conditional rendering dvs.
//     if-satser i render-metoden. Tips: spara vald flik som en variabel i state.


// 10b Gör så att den valda fliken markeras med CSS.


// 10c* Använd props.children för att kunna skicka det som ska visas i
// respektive flik till komponenten. Exempel: <TabContainer> <div>first</div> <div>second</div> </TabContainer>
