    // Person.js
    import React from 'react';

    function  Person ({ name, age }) {
    return (
        <div className="person">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        </div>
    );
    }

    export default  Person; 
