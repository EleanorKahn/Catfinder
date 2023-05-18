import React from 'react';
import CatInfoCard from './CatInfoCard';

const ResultComponent = ({ data }) => {
    //const {id, url, age, coat, name, description} = data;
    return (
        <div className="text-center grid sm:grid-cols-3 gap-5 grid-cols-1 mb-6 px-6">
            {data.map((animal) => {
                return <CatInfoCard 
                    key={animal.id} 
                    url={animal.url}
                    age={animal.age}
                    coat={animal.coat}
                    name={animal.name}
                    description={animal.description}
                />
            })}
        </div>
    );
};

export default ResultComponent;