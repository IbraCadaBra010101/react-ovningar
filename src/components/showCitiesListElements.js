import React, {Component} from 'react'

class ShowCitiesListElements extends Component {



    render() {
        return <div>
            {this.props.children}
        </div>
    }

}

export default ShowCitiesListElements;

// list = this.props.moreCities.map(el => {
//     return (<ul>
//         <li>{el.popl}{el.city}</li>
//     </ul>)
// });
