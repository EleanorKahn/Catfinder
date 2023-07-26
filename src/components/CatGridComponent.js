import React from 'react';

const CatGridComponent = ({ pet }) => {
    return (
        <div className='bg-white overflow-hidden shadow-md rounded-lg mb-3'>
            <div className="">
                <img className='bg-contain' src={pet.primary_photo_cropped.large} alt={pet.type}/>
                <h3>{pet.name}</h3>
                {pet.tags.map((tag) => <span>{tag}, </span>)}
            </div>
            <button><a className='fixed-bottom' href={pet.url} target='blank'>View my full profile on Petfinder</a></button>
            
        </div>
    );
};

export default CatGridComponent;