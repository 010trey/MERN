import "bootstrap/dist/css/bootstrap.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

function Update() {
    const { id } = useParams();
    const nav = useNavigate();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [id]);

    const update = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/update/' + id, {
            name
        })
            .then(res => {console.log(res);nav("/")})
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

  return (
    <>
    <form onSubmit={update}>
        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        <p>Edit this author:</p>
        <label>Name:</label><br/>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} class="form-control"/>
        <br /><button  className='btn btn-success'>Submit</button>
    </form>
    <button onClick={(e)=>{nav("/")}}  className='btn btn-warning'>Cancel</button>
    </>
  )
}

export default Update