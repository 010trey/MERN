import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Show(props) {
  const [pirate, setPirate] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    // Fetch the pirate data from the API
    axios
      .get(`http://localhost:8000/api/pirates/${id}`, { withCredentials: true })
      .then((res) => {
        setPirate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!pirate) {
    return <div>Loading...</div>;
  }

  const getButtonColor = (isChecked) => {
    return isChecked ? 'btn-success' : 'btn-danger';
  };

  return (
    <div className="container mt-4">
      <h1>Pirate Details</h1>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={pirate.pirate_img}
              width={350}
              height={350}
              alt={pirate.pirate_name}
              className="card-img-left"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{pirate.pirate_name}</h5>
              <p className="card-text">
                <strong>Crew Position:</strong> {pirate.position}
              </p>
              <p className="card-text">
                <strong>Catch Phrase:</strong> {pirate.phrase}
              </p>
              <div className="form-check mb-3">
                <button
                  className={`btn ${getButtonColor(pirate.peg_leg)}`}
                  disabled
                >
                  {pirate.peg_leg ? 'Yes' : 'No'}
                </button>
                <label className="form-check-label ms-2">Peg Leg</label>
              </div>
              <div className="form-check mb-3">
                <button
                  className={`btn ${getButtonColor(pirate.eye_patch)}`}
                  disabled
                >
                  {pirate.eye_patch ? 'Yes' : 'No'}
                </button>
                <label className="form-check-label ms-2">Eye Patch</label>
              </div>
              <div className="form-check mb-3">
                <button
                  className={`btn ${getButtonColor(pirate.hook_hand)}`}
                  disabled
                >
                  {pirate.hook_hand ? 'Yes' : 'No'}
                </button>
                <label className="form-check-label ms-2">Hook Hand</label>
              </div>
              <div className="form-check mb-3">
                <label htmlFor="numOfChests" className="form-check-label">
                  Number of Chests: {pirate.num_of_chests}
                </label>
              </div>
              <button onClick={() => nav('/pirates')} className="btn btn-warning">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
