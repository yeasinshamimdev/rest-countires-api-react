import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flags} = props.country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags} alt="" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;