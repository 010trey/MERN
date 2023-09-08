    // src/components/Word.js
    import React from 'react';
    import { useParams } from 'react-router-dom';

    function Word() {
    const { word } = useParams();

    return <h2>{word}</h2>;
    }

    export default Word;
