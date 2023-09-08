    // src/components/Home.js
    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom'; // Update this import

    function Home() {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const handleSubmit = () => {
        navigate(`/${resource}/${id}`); // Use navigate to change routes
    };

    return (
        <div>
        <h2>Star Wars API Navigator</h2>
        <div>
            <select
            onChange={(e) => setResource(e.target.value)}
            value={resource}
            >
            <option value="people">People</option>
            <option value="planets">Planets</option>
            {/* Add additional resources here */}
            </select>
            <input
            type="number"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    );
    }

    export default Home;