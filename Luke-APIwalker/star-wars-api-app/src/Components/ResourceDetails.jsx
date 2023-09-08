    // src/components/ResourceDetails.js
    import React, { useEffect, useState } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import axios from 'axios';

    function ResourceDetails() {
    const { resource, id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
            setData(response.data);
        } catch (error) {
            setData(null);
        }
        };

        fetchData();
    }, [resource, id]);

    if (!data) {
        return (
        <div>
            <h2>Error</h2>
            <p>These aren't the droids you're looking for.</p>
            <img src="image_of_obi-wan.jpg" alt="Obi-Wan Kenobi" />
        </div>
        );
    }

    const resourceAttributes = Object.keys(data).slice(0, 4);

    return (
        <div>
        <h2>{resource.charAt(0).toUpperCase() + resource.slice(1)} Details</h2>
        <ul>
            {resourceAttributes.map((attribute) => (
            <li key={attribute}>
                <strong>{attribute}:</strong> {data[attribute]}
            </li>
            ))}
        </ul>
        {resource === 'people' && data.homeworld && (
            <div>
            <p>Homeworld: {data.homeworld}</p>
            <Link to={data.homeworld}>Homeworld</Link>
            </div>
        )}
        </div>
    );
    }

    export default ResourceDetails;
