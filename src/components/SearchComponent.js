import React, { useState } from 'react';
import ResultComponent from './ResultComponent';

const SearchComponent = () => {
    const [submit, setSubmit] = useState(false);

    return (
        <div>
            {!submit 
            ? <div>
                <h2>A search form will live here one day</h2>
                <button onClick={() => setSubmit(true)}>submit = true</button>
            </div>

            : <ResultComponent />

            }
        </div>
        
    );
};

export default SearchComponent;