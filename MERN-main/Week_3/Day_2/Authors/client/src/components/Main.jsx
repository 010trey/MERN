import "bootstrap/dist/css/bootstrap.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Main() {
    const [authors, setAuthors] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    },[]);

    const deleteObj = (Id) => {
        axios.delete('http://localhost:8000/api/author/delete/' + Id)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== Id));
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Link to={"/new"}>Add an author</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map( (author, i) =>
                    <tr>
                        <td>{author.name}</td>
                        <td>
                            <button onClick={(e)=>{nav("/edit/"+author._id)}} className='btn btn-warning'>Edit</button>
                            <button onClick={(e)=>{deleteObj(author._id)}} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            
        </div>
  )
}

export default Main