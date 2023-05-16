import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';

const SearchComponent = () => {
    const [submit, setSubmit] = useState(false);
    const [zipcode, setZipcode] = useState(0);
    const [age, setAge] = useState("");
    const [furLength, setFurLength] = useState("");
    const [goodWith, setGoodWith] = useState("");
    const [color, setColor] = useState("");



    // useEffect(() => {

    // }, [submit]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(zipcode);
        console.log(color);
        console.log(age);
        console.log(goodWith);
    };

    return (
        <div>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='age'>Age </label>
                <select 
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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
                    onChange={(e) => setGoodWith(e.target.value)}
                >
                    <option>I want to be a solo pet</option>
                    <option>other cats</option>
                    <option>other dogs</option>
                    <option>kids</option>
                </select>
                <label htmlFor="color">Color </label>
                <select
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    <option>Any</option>
                    <option>Black</option>
                    <option>Tuxedo</option>
                    <option>White</option>
                    <option>Tortoishell</option>
                </select>
                <label htmlFor='furLength'>Fur length </label>
                <select
                    id="furLenght"
                    name="furLength"
                    value={furLength}
                    onChange={(e) => setFurLength(e.target.value)}
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

        <ResultComponent />

        
        </div>
    );
};

export default SearchComponent;