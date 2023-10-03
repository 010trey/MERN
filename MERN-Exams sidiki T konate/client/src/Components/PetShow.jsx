import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from 'axios'


function PetShow() {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
    <div class="container mt-5">
        <div class="card">
            <h3>{pet.Name} Details</h3>
            <div class="card-body">
                <p>Name: {pet.Name}</p>
                <p>Pet Description: {pet.Description}</p>
            <p>pet skill1:{pet.Skill1}</p>
            <p>pet skill2:{pet.Skill2}</p> 
            <p>pet skill3:{pet.Skill3}</p> 
                <button className="btn btn-secondary" onClick={() => nav('/')}>Home</button>
            </div>
        </div>
    </div>
    )
}

export default PetShow