import { useState, useEffect } from "react";
import ProtoSearchComponent from "../components/ProtoSearchComponent";
import ResultComponent from "../components/ResultComponent";

const CatfinderPage = () => {
    const [zipcode, setZipcode] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [data2, setData] = useState([]);
    const url = "https://api.petfinder.com/v2/oauth2/token"
    const [go, setGo] = useState(false);

    useEffect(() => {
        // Call the API
        // This is a POST request, because we need the API to generate a new token for us
        fetch(url, {
            method: 'POST',
            body: `grant_type=client_credentials&client_id=${process.env.MY_KEY}&client_secret=${process.env.MY_SECRET}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (resp) {

            // Return the response as JSON
            return resp.json();

        }).then(function (data) {

            // Log the API data
            console.log('token', data);

            // Return a second API call
            // This one uses the token we received for authentication
            return fetch('https://api.petfinder.com/v2/animals?limit=21', {
                headers: {
                    'Authorization': `Bearer ${process.env.BEARER}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            setData(data);
            console.log('pets', data);

        }).catch(function (err) {
            console.log('something went wrong', err);

        });
    },[go]);
    

    return (
        <div>
            <h2 className="text-center mb-5 pt-5 font-bold">Catfinder Page</h2>
            <button className='text-black bg-white' onClick={() => setGo(true)}>Go</button>
            <ProtoSearchComponent searchZip={(zipcode) => setZipcode(zipcode)} />
            <ResultComponent data={data2} />
        </div>
    );
};

export default CatfinderPage;