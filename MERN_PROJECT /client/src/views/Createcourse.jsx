import React ,{useState} from 'react'
import CreateCourseForm from '../components/professor_home/CourseForm'
import Nav from '../components/homepage/Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Createcourse = () => {
    
    const [course, setCourse] = useState({
        title: '',
        dates: '', 
        price: '',
        classGrade: 'Sixième', // Default classGrade
    });


    const formHandler = (e)=>{
        e.preventDefault()
        console.log("SUBMITTED Course ",course)
        
        axios.post("http://localhost:8000/api/course",course,{withCredentials:true})
        .then(serverResponse => {
            console.log(serverResponse);
            
            setCourse({title:"",dates:"",price:"" ,classGrade:""});
            console.log(dates, "this is the dates Im having ")
            navigate('/teacher')
        })

        .catch(error=> {
            console.log(error)
        })
    
    
    }

    return (




    <>
    <Nav/>
    <CreateCourseForm course={course} setCourse={setCourse} formHandler={formHandler}   />
    
    
    </>
  )
}

export default Createcourse