import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function PlayerList() {
    const [players, setPlayers] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => console.error(err));
    }, []);
    const deleteObj = (id) => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                setPlayers(players.filter(player => player._id !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            <div className="container mt-5">
                <h1>Player List</h1>
                <Link to="/players/new" className="btn btn-primary mb-3">New Player</Link>
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>T-Shirt Number</th>
                            <th>isAvailable</th>
                            <th>Action available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player._id}>
                                <td>
                                    <Link to={`/players/${player._id}`}>
                                        {player.Name}
                                    </Link>
                                </td>
                                <td>{player.TshirtNumber}</td>
                                <td>{player.isAvailable ? 'Yes' : 'No'}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => nav(`/players/edit/${player._id}`)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteObj(player._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default PlayerList