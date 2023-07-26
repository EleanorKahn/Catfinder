import React, { useState, useEffect } from 'react';
import CatGridComponent from './CatGridComponent';
import Loading from './Loading';

const SearchComponent = () => {
    const [submit, setSubmit] = useState(false);
    const [petData, setPetData] = useState([]);
    const [token, setToken] = useState('');
    const [loading, setIsLoading] = useState(false);

    const getToken = async () => {
        try {
            setIsLoading(true);
            // get access token
            const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token';

            const tokenResponse = await fetch(tokenUrl, {
                method: 'POST',
                body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_MY_KEY}&client_secret=${process.env.REACT_APP_MY_SECRET}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })

            const newToken = await tokenResponse.json();
            setToken(newToken);
            setIsLoading(false);
        } catch(err) {
            console.log(err);
        }
    }

    const petfetch = async () => {
        try {
            setIsLoading(true);

            const findPetUrl = '/data/data.json';
            const response = await fetch(findPetUrl);

            const data = await response.json();
            setPetData(data.animals);

            setIsLoading(false);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getToken();
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
                <div className='px-4 grid lg:grid-cols-4 md:grid-cols-3 md:gap-5 grid-cols-2 gap-3'>
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