import React from 'react';

const CatGridComponent = ({ pet }) => {
    console.log(pet.name);
    return (
        <div>
            <p>Hi, I am a cat</p>
        </div>
    );
};

export default CatGridComponent;