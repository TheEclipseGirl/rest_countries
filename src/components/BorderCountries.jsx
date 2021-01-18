import React, { Component } from 'react'

 class BorderCountries extends Component {
    render() {
        return (
            <div>
                <div className="border-countries-btn shadow ml-1 mr-1 pl-2 pr-2 rounded"> 
                    <p className="desc-text">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default BorderCountries
