import React, { useState, useEffect } from 'react';
import "./styles.css";
import API from "../../utils/API";
const array = ['alan', 'lore', 'mel', 'diana', 'Sally'];

function Autocomplete() {
    
    const [cities, setCities] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // API.getCities()
        // .then(cities => {
        //     console.log(cities.data);
        //     setCities(cities.data);
        // });
        setCities(array);
        // console.log(cities);
        // console.log(suggestions);

    });

    const handleInputChange = (e) => {
        console.log(suggestions)
        console.log(e.target.value);
        const value = e.target.value;
        let autocomplete = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            autocomplete = cities.sort().filter(v => regex.test(v));
            console.log(autocomplete);
        }
        setSuggestions(autocomplete);
    }

    function renderFilterList() {
        const { autocomplete } = suggestions;
        //console.log(suggestions.autocomplete);
        // const newArray = suggestions.autocomplete;
        // console.log(newArray);
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul>
                {suggestions.map((item) => <li>{item}</li>)}
            </ul>
        )
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange}/>
                {renderFilterList()}
        </div>
    )
}

export default Autocomplete;