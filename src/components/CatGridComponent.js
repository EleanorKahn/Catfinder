import React from 'react';

const CatGridComponent = ({ pet }) => {
    const coverPhoto = pet.primary_photo_cropped.full;
    return (
        <div className='bg-white shadow-md rounded-lg'>
            <div className="">
                {/* <img className='bg-contain' src={pet.primary_photo_cropped.medium} alt={pet.type}/> */}
                <div className='bg-cover bg-center min-w-full min-h-full' style={{backgroundImage: `url(${coverPhoto})`, height: '275px', width: '175px' }} aria-describedby={pet.name}>
                </div>
                <div>
                    <h3 className='text-center'>{pet.name}</h3>

                    {pet.tags.map((tag, idx) => idx + 1 === pet.tags.length ? <span>{tag}</span> : <span>{tag}, </span>)}

                    <p>View my <a className='text-blue-400' href={pet.url} target='blank'>full profile</a> on Petfinder</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default CatGridComponent;