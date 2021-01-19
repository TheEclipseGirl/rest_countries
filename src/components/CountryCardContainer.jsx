import React from 'react'
import Card from './Card';


 const CountryCardContainer =({data})=> {
    return (
        <div className="mt-5">
            <div className="mx-auto col-11 d-flex flex-wrap">
                {
                    data.map((country , index)=>{
                        return <Card country={country} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default CountryCardContainer
