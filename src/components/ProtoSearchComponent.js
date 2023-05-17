import React, { useState } from 'react';

const ProtoSearchComponent = ({ searchZipcode }) => {
    const [zipcode, setZipcode] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        searchZipcode(zipcode);
    };

    return (
        <div className='max-w-sm overflow-hidden rounded-sm mx-auto'>
            <form
                className='max-w-md w-full'
                onSubmit={onSubmit}
            >
                <div className='flex items-center py-2 mb-6'>
                    <div>
                        <label className='form-label' hidden htmlFor='zip'>ZipCode</label>
                        <input 
                            className='form-text mr-3 py-2 px-3 appearance-none rounded'
                            id="zip"
                            type="text"
                            name="zip"
                            value={zipcode}
                            placeholder='Zipcode'
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className='flex-shrink-0 text-md text-white bg-teal-400 hover:bg-teal800 rounded py-2 px-3'
                    >
                        Search
                    </button>
                </div>
            </form>

        </div>
    );
};

export default ProtoSearchComponent;