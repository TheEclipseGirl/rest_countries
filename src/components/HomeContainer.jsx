import React, { Component } from 'react'
import Nav from "./Nav";
import InputContainer from "./InputContainer";
import CountryCardContainer from './CountryCardContainer';
import SearchedCountryContainer from './SearchedCountryContainer';
import { apis } from "../apis/apis";
import axios from "axios";
 class HomeContainer extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
           showCountryCardContainer:true,
           searchedCountries:[] ,
           country:"",
           region:""

        }
    }

    handleInputChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
     }
     

    handleSearchCountry=(event) =>{
        
        if(event.key !== "Enter"){
            return;
        }
        axios.get(apis.getCountryByName + `/${this.state.country}`)
        .then((response)=>{
            this.setState({ 
                searchedCountries:response.data,
                showCountryCardContainer:false,

            })
        })

        .catch((error)=>{
            console.log('Error' ,error)
        })

    }
    
    render() {
        console.log(this.state.searchedCountries);
      const  {showCountryCardContainer} = this.state;
        return (
            <div className="home-container pb-5">
                <Nav/>
                <InputContainer
                    handleSearchCountry={this.handleSearchCountry} 
                    handleInputChange = {this.handleInputChange}
                    country = {this.state.country}
                    region = {this.state.region}
                />
                {
                    showCountryCardContainer ? <CountryCardContainer/> : <SearchedCountryContainer searchedCountries = {this.state.searchedCountries}/>
                }
               
            </div>
        )
    }
}

export default HomeContainer
