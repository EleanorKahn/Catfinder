import React from 'react'

const CatInfoCard = ({ num }) => {
    return (
        <div className='shadow-sm border-1 rounded-sm bg-white mb'>
            <h3>CatInfoCard</h3>
            <p>My num is {num}</p>
        </div>
    );
};

export default CatInfoCard;