import React from 'react';
import {modeContext} from './modeContext';


 class InputContainer  extends React.Component {

    static contextType = modeContext;

    render(){

        const {country , region, handleInputChange,handleSearchCountry,handleRefreshClick} = this.props;

            let inputBg ,textColor;
            if(this.context === 'light'){
                inputBg = 'color-light-bg';
                textColor = 'hsl(209, 23%, 22%);'
            }
            else{
                inputBg = 'color-dark-bg';
                textColor = 'light'
            }

        return (
            <div className="mt-5">
                <div className={`col-12 col-md-11 mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center`}>
                    <div className="col-12 col-md-6 mb-4">
                        <div className={`shadow p-2 col-12 col-md-8 d-flex align-items-center rounded ${inputBg}`}>
                            <i className={`fas fa-search ${textColor}`}></i>
                            <input name="country" className={`outline-none border-0 pl-2 form-control ${textColor} bg-transparent`} onChange={handleInputChange} onKeyPress={handleSearchCountry} value={country} maxLength={30} type="text" placeholder="Search for a country... "/>
                            <i class={`fas fa-redo-alt ${textColor}`} onClick={handleRefreshClick}></i>
                        </div>
                    </div>

                    <div className={`pr-2 col-4 mb-4 col-md-4 select-container col-lg-2 rounded shadow ${inputBg}`}>
                        <select name="region" className={`outline-none border-0 bg-transparent p-3 ${textColor}`} onChange={handleInputChange} value={region} id="">
                            <option className={`${inputBg}`} value="" disabled defaultclassName={`${inputBg}`} Value="">Filter by Region</option>
                            <option className={`${inputBg}`} value="africa">Africa</option>
                            <option className={`${inputBg}`} value="americas">Americas</option>
                            <option className={`${inputBg}`} value="asia">Asia</option>
                            <option className={`${inputBg}`} value="europe">Europe</option>
                            <option className={`${inputBg}`} value="oceania">Oceania</option>
                        </select>
                    </div>

                </div>                
            </div>
        )

    }   
    
}

export default InputContainer
