const domain = "https://restcountries.eu/rest/v2";

export const apis = {
    getAllCountries: `${domain}/all`,
    getCountryByName:`${domain}/name`, // /{name}
    getCountriesByRegion :`${domain}/region`, //{region}
    getCountryByCode : `${domain}/alpha`
}