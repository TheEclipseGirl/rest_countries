import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class BorderCountries extends Component {
    
    render() {
        return (
            <div>
                <Link onClick={this.handleClick} to = {{pathname: `/details/${this.props.name}`}} style={{textDecoration: 'none'}}>
                    <div className="border-countries-btn shadow ml-1 mr-1 pl-2 pr-2 rounded"> 
                        <p className="desc-text text-dark">{this.props.name}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default BorderCountries
