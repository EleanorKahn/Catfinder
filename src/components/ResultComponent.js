import React from 'react';
import CatInfoCard from './CatInfoCard';

const ResultComponent = ({ data }) => {
    return (
        <div className="text-center grid sm:grid-cols-3 gap-5 grid-cols-1 mb-6 px-6">
            {data.map((num) => {
                return <CatInfoCard key={num} num={num} />
            })}
        </div>
    );
};

export default ResultComponent;