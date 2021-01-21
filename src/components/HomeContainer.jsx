import React, { Component } from 'react'
import Nav from "./Nav";
import InputContainer from "./InputContainer";
import CountryCardContainer from './CountryCardContainer';
import { apis } from "../apis/apis";
import axios from "axios";
import {modeContext} from './modeContext';

import { connect } from "../index";
import { addCountries } from "../actions";

 class HomeContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showContainer:"CountryCardContainer",
            searchedCountries:[] ,
            country:"",
            region:"",
        }
    }

    static contextType = modeContext;

    componentDidMount(){
        axios.get(apis.getAllCountries)
        .then((response)=>{
            this.props.dispatch(addCountries(response.data));
        })
        .catch((error)=>{
            console.log('Error' ,error);
        })
    }


    handleRefreshClick = ()=>{

        axios.get(apis.getAllCountries)
        .then((response)=>{
            this.setState({
                country : "",
                region : ""
            })
            this.props.dispatch(addCountries(response.data));
        })
        .catch((error)=>{
            console.log('Error' ,error);
        })
    }



    handleInputChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        },()=>{
            if(event.target.name === "region"){
                this.setState({
                    country:""
                })
                axios.get(apis.getCountriesByRegion + `/${this.state.region}`)
                .then((response)=>{
                    this.props.dispatch(addCountries(response.data));
                }).catch((error)=>{
                    console.log('Error',error)
                });
            }
        });
    }
     

    handleSearchCountry=(event) =>{ 
        if(event.key !== "Enter"){
            return;
        }
        this.setState({
            region:""
        })
        axios.get(apis.getCountryByName + `/${this.state.country}`)
        .then((response)=>{
            this.props.dispatch(addCountries(response.data));
        })

        .catch((error)=>{
            console.log('Error' ,error)
        })

    }
    
    render() {
        console.log(this.props);

        let homeBg;
        if(this.context === 'light'){
            homeBg = 'color-light-bg';
        }
        else{
            homeBg = 'color-very-dark-bg';
        }
        return (
            
                <div className={`pb-5 ${homeBg}`}>
                   
                    <Nav
                        toggleMode = {this.props.toggleMode}
                       
                    />
                    <InputContainer
                        handleSearchCountry={this.handleSearchCountry} 
                        handleInputChange = {this.handleInputChange}
                        country = {this.state.country}
                        region = {this.state.region}
                        handleRefreshClick={this.handleRefreshClick}
                        
                    />
                    <CountryCardContainer/>
                
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      countries: state.countries
    }
}

export default connect(mapStateToProps)(HomeContainer);
