import React from 'react'
import Card from './Card';
import { connect } from "../index";

 const CountryCardContainer =(props)=> {
     
    return (
        <div className="mt-5">
            <div className="mx-auto col-11 d-flex flex-wrap">
                {
                    props.countries.data.map((country , index)=>{
                        return <Card country={country} key={index}/>
                })
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        countries : state.countries

    }
}

export default connect(mapStateToProps)(CountryCardContainer)
