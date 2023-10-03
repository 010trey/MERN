import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function PetList() {
    const [pet, setPet] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                setPet(res.data);
            })
            .catch(err => console.error(err));
    }, []);
    // const  = (id) => {
    //     axios.get(`http://localhost:8000/api/pet/${id}`)
    //         .then(res => {
    //             setPet(pet.filter(pet => pet._id !== id));
    //         })
    //         .catch(err => console.error(err));
    // };

    return (
        <>
            <div className="container mt-5">
                <dev className='d-flex justify-content-between '>
                <h1>Pet shelter</h1>
                <Link to="/pet/new" className="btn btn-primary mb-3">Add a pet to the shelter</Link>
                </dev>
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>pet Name</th>
                            <th>Pet Type</th>
                            <th>Pet Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pet.map(pet => (
                            <tr key={pet._id}>
                                <td>
                                {pet.Name} 
                                </td>
                                <Link to={`/pet/${pet._id}`}>
                                        {pet.pettype}
                                    </Link>
                                <td>
                                <td>{pet.Description}</td>
                                    
                                </td>
                                <td><button className="btn btn-sm btn-primary" onClick={() => nav(`/pet/${pet._id}`)}>details</button>
                                <button className="btn btn-sm btn-primary" onClick={() => nav(`/pet/edit/${pet._id}`)}>Edit</button></td>
                            </tr>
                            
                        
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default PetList