import React from 'react';

const CatForm = ({ zipcode, setZipcode }) => {

    function handleSubmit(e) {
        e.preventDefault();
        zipcode = e.target.value;
        console.log();

    }

    return (
        <div>
            <form>
                <label htmlFor='zipcode'>
                    Zipcode 
                </label>
                <input type='text' placeholder='12345'/>
                <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    );
};

export default CatForm;