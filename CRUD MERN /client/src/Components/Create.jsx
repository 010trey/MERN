import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Create = () => {

    const [Name, setName] = useState("")
    const [TshirtNumber, setTshirtNumber] = useState(0)
    const [isAvailable, setisAvailable] = useState(false)
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/players', {
                Name,TshirtNumber,isAvailable
            })
            .then((res) => {
                console.log(res);
                nav('/');
            })
            .catch((err) => {
                const errorResponse = err.response.data;
                const errorArr = [];
                console.log(errorResponse);
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
                
            });
    };

    return (
        <>
            <form className="container" onSubmit={onSubmitHandler}>
                {errors.map((err, index) => (
                    <p key={index} className="text-danger">{err}</p>
                ))}
                <p className='text-center'>Add a new Player:</p>
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
                    <button className="btn btn-secondary" onClick={() => nav('/')}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default Create