import React from 'react';

const CatGridComponent = ({ pet }) => {
    const coverPhoto = pet.primary_photo_cropped.full;
    return (
        <div className='bg-white shadow-md rounded-lg mb-3'>
            <div className="">
                {/* <img className='bg-contain' src={pet.primary_photo_cropped.medium} alt={pet.type}/> */}
                <div className='bg-cover min-w-full max-h-full' style={{backgroundImage: `url(${coverPhoto})`, height: '275px', width: '175px' }}>
                    <h3 className='text-center'>{pet.name}</h3>
                    {pet.tags.map((tag) => <span>{tag}, </span>)}
                </div>
            </div>
            <p>View my <a className='text-blue-400' href={pet.url} target='blank'>full profile</a> on Petfinder</p>
            
        </div>
    );
};

export default CatGridComponent;