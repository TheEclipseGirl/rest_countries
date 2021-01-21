import React, { Component } from 'react'
import BorderCountries from './BorderCountries';
import { apis } from '../apis/apis';
import axios from 'axios'
import Nav from './Nav';
import {Link}  from 'react-router-dom';
import '../assets/css/DetailsContainer.css';
import { connect } from "../index";

class DetailsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
             countryData:{},
             topLevelDomain: '',
             currencies: '',
             languages: '',
             borderCountryNameAndCode: [],
        }
    }
    
    componentDidMount() {
        this.updateComponent();
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            this.updateComponent();
        }
    }

    updateComponent = () => {
        let borderCountries;
        axios.get(apis.getCountryByCode + `/${this.props.match.params.country}`)
        .then((response)=>{
            console.log('currencies',response.data.currencies);
            let topLevelDomain, currencies, languages;
            topLevelDomain = response.data.topLevelDomain.join(", ");
            currencies = response.data.currencies[0].name;
            languages = response.data.languages.map((language) => language.name).join(", ");
            borderCountries = response.data.borders;

          this.setState({
            countryData:response.data,
            topLevelDomain,
            currencies,
            languages
          })
        })
        .catch((error)=>{
            console.log('Error' , error)
        })
        .then(()=>{
            let borderCountryNameAndCode = [] ;
            borderCountries.map((code)=>{
                axios.get(apis.getCountryByCode + `/${code}`)
                .then((response)=>{
                    borderCountryNameAndCode.push({name: response.data.name, code: code});
                })
                .catch((error)=>{
                    console.log('Error' ,error);
                })
                .then(() => {
                    this.setState({
                        borderCountryNameAndCode
                    })
                });
                return null;
            })
        });
    } 

    render() {
        const {countryData, topLevelDomain, currencies, languages, borderCountryNameAndCode} = this.state;
        let detailsBg, textColor, btnColor;
        if(this.props.mode.mode === 'light'){
            detailsBg = 'color-light-bg';
            textColor = 'dark';
            btnColor = 'light';
        }
        else{
            detailsBg = 'color-very-dark-bg';
            textColor = 'light';
            btnColor = 'color-dark-bg';
        }

        return (
            <div className={`details ${detailsBg}`}>
                <Nav toggleMode={this.props.toggleMode}/>
                <div className="col-11 mx-auto mb-5">
                    <Link to="/">
                        <button className={`back-btn mb-5 mt-5 pl-4 pr-4 shadow border-0 rounded ${btnColor}`}>
                            <i className={`fas fa-long-arrow-alt-left pr-2 ${textColor}`}></i>
                            <span className={`back-btn-text ${textColor}`}>Back</span>
                        </button>    
                    </Link>
                    
                    <div className="d-flex flex-column flex-md-row p-0 align-items-md-center">
                        <div className="col-12 col-md-5 p-0 flag-container">
                            <img className="col-10" src={countryData.flag} alt="flag"/>
                        </div>
                        <div className="col-10 col-md-5 mt-md-0 mt-5">
                            <p className={`country-name ${textColor}`}>{countryData.name}</p>
                            <div className="d-column d-md-flex justify-content-between">
                                <div className="mb-4 mb-md-0">
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Native Name: </span><span className="desc-text">{countryData.nativeName}</span></p>
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Population: </span><span className="desc-text">{countryData.population}</span></p>
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Region: </span><span className="desc-text">{countryData.region}</span></p>
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Sub Region: </span><span className="desc-text">{countryData.subregion}</span></p>
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Capital: </span><span className="desc-text">{countryData.capital}</span></p>
                                </div>
                                <div>
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Top Level Domain: </span><span className="desc-text">{topLevelDomain}</span></p>
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Currencies: </span><span className="desc-text">{currencies}</span></p>
                                    <p className={`m-0 ${textColor}`}><span className="field-title desc-text">Languages: </span><span className="desc-text">{languages}</span></p> 
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center  mt-5">
                                <p className={`field-title desc-text ${textColor}`}>Border Countries:  </p>
                                <div className="d-flex flex-wrap">
                                    { 
                                        borderCountryNameAndCode.map((country,index)=>{
                                            return  <BorderCountries name ={country.name} code={country.code} key={index}/>
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

const mapStateToProps=(state)=>{
    return{
        mode:state.mode
    }
}

export default connect(mapStateToProps)(DetailsContainer);
