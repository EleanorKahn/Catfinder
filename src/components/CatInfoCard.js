import React from 'react'

const CatInfoCard = ({ id, url, age, coat, name, description}) => {
    return (
        <div className='shadow-sm border-1 rounded-sm bg-white mb'>
            <h3>Hello, I&apos;m {name}</h3>
            <p>Age: {age}</p>
            <p>Coat length: {coat}</p>
            <p>{description}</p>
            <p><a href={url} target='_blank'>Find out more about me!</a></p>
        </div>
    );
};

export default CatInfoCard;