import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add() {
    const [name, setName] = useState("");
    const nav = useNavigate();
    const [errors, setErrors] = useState([]);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/new', {
            name
        })
            .then(res=>{console.log(res);nav("/")})
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
    <form onSubmit={onSubmitHandler} >
        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        <p>Add a new author:</p>
        <label>Name:</label><br/>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} class="form-control"/>
        <br /><button  className='btn btn-success'>Submit</button>
    </form>
    <button onClick={(e)=>{nav("/")}}  className='btn btn-warning'>Cancel</button>
    </>
  )
}

export default Add