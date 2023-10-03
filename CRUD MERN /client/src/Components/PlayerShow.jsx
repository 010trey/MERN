import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from 'axios'


function PlayerShow() {
    const [player, setPlayer] = useState({})
    const { id } = useParams();
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then(res => setPlayer(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
    <div class="container mt-5">
        <div class="card">
            <h3>{player.Name} Details</h3>
            <div class="card-body">
                <p>Name: {player.Name}</p>
                <p>T-Shirt Number: {player.TshirtNumber}</p>
                <p>isAvailable: {player.isAvailable ? 'Yes' : 'No'}</p>
                <button className="btn btn-secondary" onClick={() => nav('/')}>Home</button>
            </div>
        </div>
    </div>
    )
}

export default PlayerShow