import { inputCountry } from "./index";
import { list } from "./index";
import { countryInfo } from "./index";
import { fullMarkUp } from "./index";
import { shortMarkUp } from "./index";
import Notiflix from 'notiflix';

export function fetchCountries(e) {
    let name = inputCountry.value.toLowerCase().trim();
    // console.log(inputCountry.value);
    if (!name) {
        list.innerHTML = "";
        countryInfo.innerHTML = "";
        // console.log("Its work!");
    }
    else {
        const resp = fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        resp.then(response =>{
            if (!response.ok) {
                list.innerHTML = "";  
                countryInfo.innerHTML = ""; 
                Notiflix.Notify.failure("Oops, there is no country with that name")
            }
            // console.log(response);
            
            return response.json()   
        }) 
        .then(data => {
         
            // console.log(markUp);
            // console.log(data.length);

            if  (data.length < 2) {
                
                countryInfo.innerHTML = fullMarkUp(data);
                list.innerHTML = "";
                // console.log(data);
            } else if (data.length < 10) {
                
                list.innerHTML = shortMarkUp(data);
                countryInfo.innerHTML = "";
                //  console.log(data);
            } else if (data.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            } 

        }).catch(err => console.log(err))
    }
        // console.log(countryName);
        
}
