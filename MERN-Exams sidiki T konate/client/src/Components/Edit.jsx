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
    const [pettype, setpettype] = useState(0)
    const [Description, setDescription] = useState(false)
    const [Skill1, setSkill1] = useState("")
    const [Skill2, setSkill2] = useState("")
    const [Skill3, setSkill3] = useState("")
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.Name);
                setpettype(res.data.pettype);
                setDescription(res.data.Description);
            });
    }, [id]);


    const update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            Name, pettype, Description,Skill1,Skill2,Skill3
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
                <p>Edit this Pet:</p>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={Name}
                    />
                    <label htmlFor="name" className="form-label">Pet Type:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pettype"
                        onChange={(e) => setpettype(e.target.value)}
                        value={pettype}
                    />
                    <label htmlFor="Description" className="form-label"> Description :</label>

                    <input
                        type="text"
                        className="form-control"
                        id="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={Description}
                    />
                        <label htmlFor="Skill1" className="form-label"> Skill1 :</label>

                            <input
                                type="text"
                                className="form-control"
                                id="Skill1"
                                onChange={(e) => setSkill1(e.target.value)}
                                value={Skill1}
                            />
                                <label htmlFor="Skill2" className="form-label"> Skill2 :</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Skill2"
                                        onChange={(e) => setSkill2(e.target.value)}
                                        value={Skill2}
                                    />
                                        <label htmlFor="Skill3" className="form-label"> Skill3 :</label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Skill3"
                                                onChange={(e) => setSkill3(e.target.value)}
                                                value={Skill3}
                                            />


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