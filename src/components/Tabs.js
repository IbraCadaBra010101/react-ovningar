import React, {Component} from 'react';


const associatedPress = {
    news: 'This is the news: some neeews.This is the news: some neeewsThis is the news: some neeews',
    entertainment: 'Some celebrities did something.Some celebrities did something.Some celebrities did something',
    sports: 'Man utd won or lost. we dont know.Man utd won or lost. we dont know.Man utd won or lost. we dont know.'

};

class Tabs extends Component {
    state = {
        newsMode: 'newsMode'
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
                <button onClick={this.news}>news</button>
                <button onClick={this.sports}>sports</button>
                <button onClick={this.entertainment}>entertainment</button>

                <div>{associatedPress.news}</div>
            </div>

        } else if (this.state.newsMode === 'sportsMode') {
            return <div>
                <button onClick={this.news}>news</button>
                <button onClick={this.sports}>sports</button>
                <button onClick={this.entertainment}>entertainment</button>

                <div>{associatedPress.sports}</div>
            </div>
        } else if (this.state.newsMode === 'entertainment') {
            return <div>
                <button onClick={this.news}>news</button>
                <button onClick={this.sports}>sports</button>
                <button onClick={this.entertainment}>entertainment</button>

                <div>{associatedPress.entertainment}</div>
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