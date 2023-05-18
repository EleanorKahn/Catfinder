import { useState, useEffect } from "react";
import ProtoSearchComponent from "../components/ProtoSearchComponent";
import ResultComponent from "../components/ResultComponent";

const CatfinderPage = () => {
    const [zipcode, setZipcode] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const url = ""

    

    return (
        <div>
            <h2 className="text-center mb-5 pt-5 font-bold">Catfinder Page</h2>
            <ProtoSearchComponent searchZip={(zipcode) => setZipcode(zipcode)} />
            <ResultComponent data={data} />
        </div>
    );
};

export default CatfinderPage;