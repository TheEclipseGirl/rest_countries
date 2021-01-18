import React, { Component } from 'react'
import axios from 'axios';
import {apis} from "../apis/apis";

 class InputContainer extends Component {
    
     
     
    render() {
        const {country , region} = this.props
        return (
            <div className="mt-5">
                <div className="col-11 mx-auto d-flex justify-content-between align-items-center">
                    <div className="col-6">
                        <div className="shadow p-2 col-8 bg-white d-flex align-items-center rounded">
                            <i className="fas fa-search text-muted"></i>
                            <input name="country" className="border-0 bg-transparent pl-2 form-control" onChange={this.props.handleInputChange} onKeyPress={this.props.handleSearchCountry} value={country} maxLength={30} type="text" placeholder="Search for a country... "/>
                        </div>
                        
                    </div>
                    <div className="pr-2 rounded bg-white shadow">
                        <select name="region" className="border-0 bg-transparent p-3" onChange={this.props.handleInputChange} value={region} id="">
                            <option value="" disabled defaultValue="">Filter by Region</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>

                </div>                
            </div>
        )
    }
}

export default InputContainer
