
import React, {Component} from 'react';

class ShowCities extends Component {
    c = this.props.cities;


    render() {
        return this.c.map(el => {
            return (<ul>
                {el.popl}{el.city}
            </ul>)

        });
    }

}
export default ShowCities;

