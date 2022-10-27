import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data=useLoaderData();
    return (
        <div>
            <h4>Course name : {data.name}</h4>
        </div>
    );
};

export default CheckOut;