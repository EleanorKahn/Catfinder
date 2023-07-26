import React from 'react';

const CatGridComponent = ({ pet }) => {
    return (
        <div className='bg-white overflow-hidden shadow-md rounded-lg mb-3'>
            <div className="">
                <img className='bg-contain' src={pet.primary_photo_cropped.medium} alt={pet.type}/>
                <h3>{pet.name}</h3>
                {pet.tags.map((tag) => <span>{tag}, </span>)}
            </div>
            <p>View my <a className='text-blue-400' href={pet.url} target='blank'>full profile</a> on Petfinder</p>
            
        </div>
    );
};

export default CatGridComponent;