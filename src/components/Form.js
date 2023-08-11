import React, { useState } from 'react';

const Form = ({ zipcode }) => {
    const [zip, setZip] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        zipcode(e.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor='zipcode'>
                    Zipcode 
                </label>
                <input type='text' placeholder='12345'/>
                <button type='submit' onClick={handleSubmit(e)}>Submit</button>
            </form>
        </div>
    );
};

export default Form;