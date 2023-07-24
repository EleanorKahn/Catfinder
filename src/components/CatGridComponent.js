import React from 'react';

const CatGridComponent = ({ squid }) => {
    console.log(squid);
    return (
        <div>
            <p>Hi, I am {squid}</p>
        </div>
    )
}

export default CatGridComponent;