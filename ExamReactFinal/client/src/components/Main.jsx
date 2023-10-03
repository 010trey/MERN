import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

function Main() {
    const [pirates, setPirates] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates', { withCredentials: true })
            .then(res => {
                setPirates(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
                if (err.response.status === 401) {
                    nav("/unauthorized", { replace: true });
                }
            });

    }, []);
    const deletePirate = (id)=>{
        axios.delete(`http://localhost:8000/api/pirates/delete/${id}`, { withCredentials: true })
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        setPirates(pirates.filter((onePirates)=>{
            return (onePirates._id !== id)
        }))
        
    }

    return (
        <div className="container-fluid">
  <div className="row">
    <div className="col">
      <div className="d-flex justify-content-between m-2 align-items-center">
        <h2>Pirate List</h2>
        <Link to="/pirates/new" className="btn btn-primary">Add a New Pirate</Link>
      </div>
      {pirates.map((pirate, i) => (
        <div className="card mb-3" key={i}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pirate.pirate_img} width={150} height={150} alt={pirate.pirate_name} className="card-img-left" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{pirate.pirate_name}</h5>
                <p className="card-text">Crew Position: {pirate.position}</p>
                <div className="d-flex justify-content-end">
                  <Link to={`/pirates/${pirate._id}`} className="btn btn-success me-2">View Pirate</Link>
                  <button onClick={() => deletePirate(pirate._id)} className="btn btn-warning">Walk the Plank</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    )
}

export default Main;
