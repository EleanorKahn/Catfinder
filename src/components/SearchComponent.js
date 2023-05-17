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
        <div className='rounded'>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className='w-full grid grid-cols-2'>
                    <div className=''>
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
                    </div>
                    <div>
                        <label htmlFor="goodWith">Good with </label>
                        <select 
                            className='form-select'
                            id="goodWith"
                            name="goodWith"
                            value={goodWith}
                            type='select'
                            onChange={(e) => setGoodWith(e.target.value)}
                        >
                            <option>I want to be a solo pet</option>
                            <option>other cats</option>
                            <option>other dogs</option>
                            <option>kids</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="color">Color </label>
                        <select
                            className='form-select'
                            id="color"
                            name="color"
                            value={color}
                            type="select"
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
                            className='form-select'
                            id="furLenght"
                            name="furLength"
                            value={furLength}
                            type="select"
                            onChange={(e) => setFurLength(e.target.value)}
                        >
                            <option>Any</option>
                            <option>Hairless</option>
                            <option>Short</option>
                            <option>Medium</option>
                            <option>Long</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='zipcode'>ZIP Code </label>
                        <input 
                            className='form-input'
                            placeholder='00000'
                            id="zipcode" 
                            name="zipcode" 
                            value={zipcode} 
                            type="text"
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className='focus:border-red-50 bg-sky-400 text-white max-w-full rounded-sm h-6' onClick={() => setSubmit(true)}>Search</button>
            </form>
            <ResultComponent />
        </div>
    );
};

export default SearchComponent;