import React, { useState } from 'react';
import ResultComponent from './ResultComponent';

const SearchComponent = () => {
    const [submit, setSubmit] = useState(false);
    const [zipcode, setZipcode] = useState(0);
    const [age, setAge] = useState("");
    const [furLength, setFurLength] = useState("");
    const [goodWith, setGoodWith] = useState("");
    const [color, setColor] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(zipcode);
    };

    return (
        <div>
        {!submit
        ? <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='age'>Age </label>
                <select 
                    id="age"
                    name="age"
                    value={age}
                >
                    <option>Any</option>
                    <option>Kitten</option>
                    <option>Young Adult</option>
                    <option>Adult</option>
                    <option>Senior</option>
                </select>
                <label htmlFor="goodWith">Good with </label>
                <select 
                    id="goodWith"
                    name="goodWith"
                    value={goodWith}
                >
                    <option>I want to be a solo pet</option>
                    <option>other cats</option>
                    <option>other dogs</option>
                    <option>kids</option>
                </select>
                <label htmlFor='furLength'>Fur length </label>
                <select
                    id="furLenght"
                    name="furLength"
                    value={furLength}
                >
                    <option>Any</option>
                    <option>Hairless</option>
                    <option>Short</option>
                    <option>Medium</option>
                    <option>Long</option>
                </select>
                <label htmlFor='zipcode'>ZIP Code </label>
                <input 
                    placeholder='00000'
                    id="zipcode" 
                    name="zipcode" 
                    value={zipcode} 
                    type="text"
                    onChange={(e) => setZipcode(e.target.value)}
                />
            </div>
            <button type="submit" onClick={() => setSubmit(true)}>Search</button>
        </form>

        : <ResultComponent />

        }
        </div>
    );
};

export default SearchComponent;