import React, { Component } from 'react'
import Card from './Card';
 class SearchedCountryContainer extends Component {
     
    render() {
        return(
            <div className="mt-5">
                <div className="mx-auto col-11 d-flex flex-wrap justify-content-around">
                {
                    this.props.searchedCountries.map((country,index)=>{
                    return <Card country={country} key={index}/>
                    })
                }
                </div>
            </div>
        )
    }
}

export default SearchedCountryContainer
