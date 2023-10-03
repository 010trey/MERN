import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add(props) {
    const [name, setName] = useState(props.userName);
    const [pirateName, setPirateName] = useState("");
    const [pirateImg, setPirateImg] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("Captain");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [numOfChests, setNumOfChests] = useState(1); // New state for number of chests

    const nav = useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        const pirates = {
            pirate_name: pirateName,
            pirate_img: pirateImg,
            phrase,
            position,
            peg_leg: pegLeg,
            eye_patch: eyePatch,
            hook_hand: hookHand,
            num_of_chests: numOfChests // Include the number of chests in the request
        };
        axios.post('http://localhost:8000/api/pirates/new', pirates, { withCredentials: true })
            .then(res => {
                console.log(res);
                nav("/pirates");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
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
            <form onSubmit={onSubmitHandler} className="form-group">
                {errors.map((err, index) => (
                    <p key={index} style={{ color: "red" }}>
                        {err}
                    </p>
                ))}
                <h1>Submit a Pirate:</h1>
                <div className="mb-3">
                    <label htmlFor="pirateName" className="form-label">Pirate Name:</label>
                    <input type="text" id="pirateName" onChange={(e) => setPirateName(e.target.value)} value={pirateName} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pirateImg" className="form-label">Pirate Image URL:</label>
                    <input type="text" id="pirateImg" onChange={(e) => setPirateImg(e.target.value)} value={pirateImg} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phrase" className="form-label">Pirate Catch Phrase:</label>
                    <input type="text" id="phrase" onChange={(e) => setPhrase(e.target.value)} value={phrase} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">Crew Position:</label>
                    <select id="position" onChange={(e) => setPosition(e.target.value)} value={position} className="form-control">
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quartermaster">Quartermaster</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="numOfChests" className="form-label">Number of Chests:</label>
                    <select id="numOfChests" onChange={(e) => setNumOfChests(parseInt(e.target.value))} value={numOfChests} className="form-control">
                        {[1, 2, 3, 4, 5].map(num => (
                            <option value={num} key={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" id="pegLeg" onChange={() => setPegLeg(!pegLeg)} checked={pegLeg} className="form-check-input" />
                    <label htmlFor="pegLeg" className="form-check-label">Peg Leg</label>
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" id="eyePatch" onChange={() => setEyePatch(!eyePatch)} checked={eyePatch} className="form-check-input" />
                    <label htmlFor="eyePatch" className="form-check-label">Eye Patch</label>
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" id="hookHand" onChange={() => setHookHand(!hookHand)} checked={hookHand} className="form-check-input" />
                    <label htmlFor="hookHand" className="form-check-label">Hook Hand</label>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            <button onClick={() => nav("/pirates")} className="btn btn-warning">Cancel</button>

        </>
    )
}

export default Add;
