import React, { useState, useEffect } from 'react';
import CatGridComponent from './CatGridComponent';
import Loading from './Loading';

const SearchComponent = () => {
    const [submit, setSubmit] = useState(false);
    const [petData, setPetData] = useState([]);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        const petfetch = async () => {
            try {
                setIsLoading(true);
                const url = '/data/data.json';
                const response = await fetch(url);
                const data = await response.json();
                setPetData(data.animals);
                setIsLoading(false);
            } catch(err) {
                console.log(err);
            }
        }
        petfetch();
    }, [submit]);

    return (
        <div>
            <button 
                className='submit' 
                onClick={() => setSubmit(true)}
            >
                Find a pet
            </button>
            {loading
            ? <Loading />
            : petData.length > 0 && submit &&
                <div>
                    {petData?.map((pet) => {
                        return (
                            <CatGridComponent key={pet.id} pet={pet}/>
                        );
                    })
                }
            </div>
            }
        </div>
    );
};

export default SearchComponent;