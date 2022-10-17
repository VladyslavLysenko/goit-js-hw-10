import { inputCountry } from "./index";
import { list } from "./index";
import { countryInfo } from "./index";
import { manageRenderMarkUp } from "./index";
import Notiflix from 'notiflix';

export function fetchCountries(e) {
    let name = inputCountry.value.toLowerCase().trim();
    
    if (!name) {
        list.innerHTML = "";
        countryInfo.innerHTML = "";
    }
    else {
        const resp = fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        resp.then(response =>{
            if (!response.ok) {
                list.innerHTML = "";  
                countryInfo.innerHTML = ""; 
                Notiflix.Notify.failure("Oops, there is no country with that name")
            }
            return response.json()   
        }) 
        .then(data => {
            manageRenderMarkUp(data)
        }).catch(err => console.log(err))
    }
        
}


