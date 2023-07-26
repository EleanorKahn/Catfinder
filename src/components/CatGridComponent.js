import React from 'react';

const CatGridComponent = ({ pet }) => {
    console.log(pet.name);
    return (
        <div className='shadow-md border-2 mb-3'>
            <div className='bg-white'>
                <h3>{pet.name}</h3>
                {pet.tags.map((tag) => <span>{tag}, </span>)}
            </div>
            <a href={pet.url} target='blank'>View my full profile on Petfinder</a>
            
        </div>
    );
};

export default CatGridComponent;