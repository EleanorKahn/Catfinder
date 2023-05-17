import { useState } from "react";
import ProtoSearchComponent from "../components/ProtoSearchComponent";

const CatfinderPage = () => {
    const [zipcode, setZipcode] = useState()
    return (
        <div>
            <h2 className="text-center mb-5 pt-5 font-bold">Catfinder Page</h2>
            <div>
                <ProtoSearchComponent searchZip={(zipcode) => setZipcode(zipcode)} />
            </div>
        </div>
    );
};

export default CatfinderPage;