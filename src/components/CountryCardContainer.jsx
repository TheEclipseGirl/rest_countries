import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';
import { apis } from "../apis/apis";

 class CountryCardContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }
    
    componentDidMount(){
        axios.get(apis.getAllCountries)
        .then((response)=>{
            this.setState({
                data : response.data
            })
        })

        .catch((error)=>{
            console.log('Error' ,error);
        })

    }

    render() {
      const {data} = this.state
        return (
            <div className="mt-5">
                <div className="mx-auto col-11 d-flex flex-wrap justify-content-around">
                    {
                        data.map((country , index)=>{
                            return <Card country={country} key={index}/>
                        })
                    }
               </div>
            </div>
        )
    }
}

export default CountryCardContainer
