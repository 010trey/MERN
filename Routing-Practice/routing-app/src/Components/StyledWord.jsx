    // src/components/StyledWord.js
    import React from 'react';
    import { useParams } from 'react-router-dom';
    import './StyledWord.css';

    function StyledWord() {
    const { word, color, background } = useParams();
    const style = { color, backgroundColor: background };

    return <h2 className="styled-word" style={style}>{word}</h2>;
    }

    export default StyledWord;
