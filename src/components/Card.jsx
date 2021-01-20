import React, { Component } from 'react';
import '../assets/css/Card.css';
import {Link} from 'react-router-dom';
import {modeContext} from './modeContext';

class Card extends Component {

    static contextType = modeContext;

    render() {
        const {
            name,
            population,
            region,
            capital,
            flag,
            alpha3Code
        } = this.props.country;

        let cardBg, textColor;
        if(this.context === 'light'){
            cardBg = 'color-light-bg';
            textColor = 'hsl(209, 23%, 22%);'
        }
        else{
            cardBg = 'color-dark-bg';
            textColor = 'light'
        }
        return (

                <div className={`card p-0 shadow mb-4 ml-3 mr-4 ${cardBg}`}>
                    <Link to ={{pathname: `/details/${alpha3Code}`}} style={{height: '50%'}} >
                        <div className="card-img-container p-0">
                            <img src={flag} alt="flag"/>
                        </div>
                    </Link>
                    <div>
                        <div className="p-4">
                            <p className={`card-country-name ${textColor}`}>{name}</p>
                            <div>
                                <span className={`card-details-title ${textColor}`}>Population: </span> 
                                <span className={`card-details ${textColor}`}>{population}</span>
                            </div>
                            <div>
                                <span className={`card-details-title ${textColor}`}>Region: </span> 
                                <span className={`card-details ${textColor}`}>{region}</span>
                            </div>
                            <div>
                                <span className={`card-details-title ${textColor}`}>Capital: </span> 
                                <span className={`card-details ${textColor}`}>{capital}</span>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card
