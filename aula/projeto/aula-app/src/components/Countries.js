import React from "react";
import Photo from "./Photo";
import axios from "axios";
import { useEffect,useState } from "react";
import Grid from "./Grid";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/name/al')
            .then(response => {
                let data = []
                response.data.forEach(element => {
                    console.log(element.name);
                    data.push({
                                name: element.name.common, 
                                flag: element.flags.png
                            });
                });
                setCountries(data);
            }
        );
    }, []);
    
    const renderCountries = () => {
        return countries.map((country, index) => {
            return(
                <div key={index}>
                    <span>{country.name}</span>
                    <Photo src={country.flag} alt={country.name} />
                </div>
            );
        });
    }

    return(
        <div>
            <h1>Countries</h1>    
            <Grid>
            {renderCountries()}
            </Grid>        
        </div>
    );
}

export default Countries;