import axios from 'axios';

export class CountriesRepo {   
    private readonly corsConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    public get countries() {
        return axios
            .create(this.corsConfig)
            .get('https://restcountries.eu/rest/v2/all')
            .then((response) => this.addIdToCountries(response.data))
            .catch(error => console.log(error, 'error fetching api data'));
    }

    private addIdToCountries(countries: object[]) {
        return countries.map((country: object, id: number) => ({ id, ...country }));
    }
}