import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {modeContext} from './modeContext';

 class BorderCountries extends Component {
    static contextType = modeContext;
    render() {

        let textColor, btnColor;
        if(this.context === 'light'){
            textColor = 'dark';
            btnColor = 'light';
        }
        else{
            textColor = 'light';
            btnColor = 'color-dark-bg';
        }

        return (
            <div>
                <Link to = {{pathname: `/details/${this.props.name}`}} style={{textDecoration: 'none'}}>
                    <div className={`border-countries-btn shadow ml-1 mr-1 pl-2 pr-2 rounded ${btnColor}`}> 
                        <p className={`desc-text ${textColor}`}>{this.props.name}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default BorderCountries
