import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function Edit() {
    const { id } = useParams();
    const nav = useNavigate();
    const [Name, setName] = useState("")
    const [TshirtNumber, setTshirtNumber] = useState(0)
    const [isAvailable, setisAvailable] = useState(false)
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then(res => {
                setName(res.data.Name);
                setTshirtNumber(res.data.TshirtNumber);
                setisAvailable(res.data.isAvailable);
            });
    }, [id]);


    const update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/players/' + id, {
            Name, TshirtNumber, isAvailable
        })
            .then(res => {
                console.log(res);
                nav('/');
            })
            .catch(err => {
                const errorResponse = err.response.data;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <>
            <form className="container" onSubmit={update}>
                {errors.map((err, index) => (
                    <p key={index} className="text-danger">{err}</p>
                ))}
                <p>Edit this Players:</p>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={Name}
                    />
                    <label htmlFor="name" className="form-label">TshirtNumber:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="TshirtNumber"
                        onChange={(e) => setTshirtNumber(e.target.value)}
                        value={TshirtNumber}
                    />
                    <label htmlFor="name" className="form-label"> isAvailable :</label>

                    <input type="checkbox" checked={isAvailable} onChange={(e) => setisAvailable(e.target.checked)} />




                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-secondary" onClick={() => { nav('/'); }}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default Edit