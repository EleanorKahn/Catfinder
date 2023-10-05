import React, { useState, useEffect } from 'react';
import CatGridComponent from './CatGridComponent';
import Loading from './Loading';
import CatForm from './CatForm';

const SearchComponent = () => {
    const [submit, setSubmit] = useState(false);
    const [petData, setPetData] = useState([]);
    const [token, setToken] = useState({});
    const [loading, setIsLoading] = useState(false);
    const [zipcode, setZipcode] = useState();

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
            });

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

            const findPetUrl = 'https://api.petfinder.com/v2/animals/?limit=20&status=adoptable&type=Cat&primary_photo_cropped=true';
            const response = await fetch(findPetUrl, {
                headers: {
                    'Authorization': `${token.token_type} ${token.access_token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

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
            <CatForm zipcode={zipcode} setZipcode={setZipcode} />
            <div className='search-component'>
                <button 
                    className='submit' 
                    onClick={() => setSubmit(true)}
                >
                    Find a pet
                </button>
                <CatForm />
                {!loading && petData.length === 0 && submit && <h2>No pets found</h2>}
                {loading
                ? <Loading />
                : (petData.length > 0) && submit &&
                    <div className='px-4 grid lg:grid-cols-4 md:grid-cols-3 md:gap-5 grid-cols-2 gap-3 results-grid'>
                        {console.log(petData)}
                        {petData?.map((pet) => {
                            return (
                                <CatGridComponent key={pet.id} pet={pet}/>
                            );
                        })
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default SearchComponent;