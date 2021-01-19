import React, { Component } from 'react';
import '../assets/css/Card.css';
import {Link} from 'react-router-dom';

export class Card extends Component {

    render() {
        const {
            name,
            population,
            region,
            capital,
            flag
        } = this.props.country;

        return (
            
                <div className="card p-0 shadow mb-4 ml-3 mr-4">
                    <Link to ={{pathname: `/details/${name}`}} style={{height: '50%'}} >
                        <div className="card-img-container p-0">
                            <img src={flag} alt="flag"/>
                        </div>
                    </Link>
                    <div>
                        <div className="p-4">
                            <p className="card-country-name">{name}</p>
                            <div>
                                <span className="card-details-title">Population: </span> 
                                <span className="card-details">{population}</span>
                            </div>
                            <div>
                                <span className="card-details-title">Region: </span> 
                                <span className="card-details">{region}</span>
                            </div>
                            <div>
                                <span className="card-details-title">Capital: </span> 
                                <span className="card-details">{capital}</span>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card
