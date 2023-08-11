import React from 'react';

const CatGridComponent = ({ pet }) => {
    const coverPhoto = !pet.primary_photo_cropped.small ? 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65580616/4/?bust=1690232655&width=300' : pet.primary_photo_cropped.small;
    return (
        <div className='bg-white shadow-md cat-card'>
            <div className="rounded-md">
                <div className='bg-cover bg-center min-w-full min-h-full' style={{backgroundImage: `url(${coverPhoto})`, height: '250px', width: '175px' }} aria-describedby={pet.name}>
                </div>
                <div>
                    <h3 className='text-center'>{pet.name}</h3>

                    {pet.tags.map((tag, idx) => idx + 1 === pet.tags.length ? <span key={idx}>{tag}</span> : <span key={idx}>{tag}, </span>)}

                    <p>View my <a className='text-blue-400' href={pet.url} target='blank'>full profile</a> on Petfinder</p>
                </div>
            </div>   
        </div>
    );
};

export default CatGridComponent;