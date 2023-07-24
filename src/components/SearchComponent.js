import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
    const [submit, setSubmit] = useState('false');
    const [petData, setPetData] = useState({});
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        const petfetch = async () => {
            try {
                setIsLoading(true);
                console.log('I am loading');
                const url = '/data/data.json';
                const response = await fetch(url);
                const data = await response.json();
                setPetData(data);
                console.log(petData);
                setIsLoading(false);
                console.log('I am not loading anymore')
            } catch(err) {
                console.log(err);
            }
        }
        petfetch();
    },[submit]);

    return (
        <div>
            <button onClick={() => setSubmit(true)}>Find a pet</button>
            {/* {submit && petData?.map} */}
        </div>
    );
};

export default SearchComponent;