    // src/components/Number.js
    import React from 'react';
    import { useParams } from 'react-router-dom';

    function Number() {
    const { num } = useParams();

    return <h2>{num}</h2>;
    }

    export default Number;
