import React, { Component } from 'react'
import BorderCountries from './BorderCountries';
import { apis } from '../apis/apis';
import axios from 'axios'
import Nav from './Nav';
import {Link}  from 'react-router-dom';
import '../assets/css/DetailsContainer.css';

class DetailsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
             country: window.location.pathname.split('/')[2],
             countryData:{},
             topLevelDomain: '',
             currencies: '',
             languages: '',
             borderCountryNames: []

        }
    }
    
    componentDidMount() {
        let borderCountries;
        axios.get(apis.getCountryByName + `/${this.state.country}?fullText=true`)
        .then((response)=>{
            let topLevelDomain, currencies, languages;
            topLevelDomain = response.data[0].topLevelDomain.join(", ");
            currencies = response.data[0].currencies[0].name;
            languages = response.data[0].languages.map((language) => language.name).join(", ");
            borderCountries = response.data[0].borders;

          this.setState({
            countryData:response.data[0],
            topLevelDomain,
            currencies,
            languages
          })
        })
        .catch((error)=>{
            console.log('Error' , error)
        })
        .then(()=>{
            let borderCountryNames = [] ;
            borderCountries.map((code)=>{
                axios.get(apis.getCountryByCode + `/${code}`)
                .then((response)=>{
                    borderCountryNames.push(response.data.name);
                  
                    this.setState({
                        borderCountryNames
                    })
                })
                .catch((error)=>{
                    console.log('Error' ,error);
                })
                return null;
            })
        });
    
    }

    render() {
        const {countryData, topLevelDomain, currencies, languages,borderCountryNames} = this.state;

        return (
            <div>
                <Nav/>
                <div className="col-11 mx-auto mb-5">
                    <Link to="/">
                        <button className="back-btn mb-5 mt-5 pl-4 pr-4 shadow border-0 bg-transparent rounded">
                            <i className="fas fa-long-arrow-alt-left pr-2"></i>
                            <span className="back-btn-text text-muted">Back</span>
                        </button>    
                    </Link>
                    
                    <div className="d-flex flex-column flex-md-row p-0 align-items-md-center">
                        <div className="col-12 col-md-5 p-0 flag-container">
                            <img className="border col-10" src={countryData.flag} alt="flag"/>
                        </div>
                        <div className="col-10 col-md-5 mt-md-0 mt-5">
                            <p className="country-name">{countryData.name}</p>
                            <div className="d-column d-md-flex justify-content-between">
                                <div className="mb-4 mb-md-0">
                                    <p className="m-0"><span className="field-title desc-text">Native Name: </span><span className="desc-text">{countryData.nativeName}</span></p>
                                    <p className="m-0"><span className="field-title desc-text">Population: </span><span className="desc-text">{countryData.population}</span></p>
                                    <p className="m-0"><span className="field-title desc-text">Region: </span><span className="desc-text">{countryData.region}</span></p>
                                    <p className="m-0"><span className="field-title desc-text">Sub Region: </span><span className="desc-text">{countryData.subregion}</span></p>
                                    <p className="m-0"><span className="field-title desc-text">Capital: </span><span className="desc-text">{countryData.capital}</span></p>
                                </div>
                                <div>
                                    <p className="m-0"><span className="field-title desc-text">Top Level Domain: </span><span className="desc-text">{topLevelDomain}</span></p>
                                    <p className="m-0"><span className="field-title desc-text">Currencies: </span><span className="desc-text">{currencies}</span></p>
                                    <p className="m-0"><span className="field-title desc-text">Languages: </span><span className="desc-text">{languages}</span></p> 
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center  mt-5">
                                <p className="field-title desc-text">Border Countries:  </p>
                                <div className="d-flex flex-wrap">
                                    { 
                                        borderCountryNames.map((name,index)=>{
                                            return  <BorderCountries name ={name} key={index}/>
                                        })
                                    }
                                   
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                    
                   

                </div>
               
            </div>
        )
    }
}

export default DetailsContainer;
