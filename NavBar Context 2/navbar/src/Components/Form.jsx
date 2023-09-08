    import React, { useState } from 'react';
    import { useNameContext } from './NameContext';

    function Form() {
    const { setName } = useNameContext();
    const [inputName, setInputName] = useState('');

    const handleNameChange = () => {
        setName(inputName);
        setInputName('');
    };

    return (
        <div>
        <input
            type="text"
            placeholder="Enter your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleNameChange}>Change Name</button>
        </div>
    );
    }

    export default Form;
