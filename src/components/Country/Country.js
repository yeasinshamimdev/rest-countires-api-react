import React from 'react';
import './Country.css';


const Country = (props) => {
    const {name, population, flags} = props.country;
    return (
        <div className='country'>
            <h3 className='text-danger'>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;