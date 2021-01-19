import React from 'react'

 const InputContainer =({country , region, handleInputChange,handleSearchCountry,handleRefreshClick})=> {
        return (
            <div className="mt-5">
                <div className="col-12 col-md-11 mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="shadow p-2 col-12 col-md-8 bg-white d-flex align-items-center rounded">
                            <i className="fas fa-search text-muted"></i>
                            <input name="country" className="outline-none border-0 bg-transparent pl-2 form-control" onChange={handleInputChange} onKeyPress={handleSearchCountry} value={country} maxLength={30} type="text" placeholder="Search for a country... "/>
                            <i class="fas fa-redo-alt" onClick={handleRefreshClick}></i>
                        </div>
                    </div>
                    <div className="pr-2 col-4 mb-4 col-md-4 select-container col-lg-2 rounded bg-white shadow">
                        <select name="region" className="outline-none border-0 bg-transparent p-3" onChange={handleInputChange} value={region} id="">
                            <option value="" disabled defaultValue="">Filter by Region</option>
                            <option value="africa">Africa</option>
                            <option value="americas">Americas</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>

                </div>                
            </div>
        )
    
}

export default InputContainer
