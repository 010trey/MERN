import React, { useState, useEffect } from 'react'
import '../../styles.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();




const logout = () => {
    console.log("logout");
    axios.post('http://localhost:8000/api/student/logout',{},{withCredentials:true})
    .then(serverResponse=>{
        console.log(serverResponse);
        navigate('/')
    })
    .catch(error=>console.log(error))
}


useEffect(() => {
  // Fetch the logged-in status when the component mounts
  axios.get('http://localhost:8000/api/student/loggedUser', { withCredentials: true })
    .then((serverResponse) => {
      if (serverResponse.data && Object.keys(serverResponse.data).length > 0) {
        // Set loggedIn to true if the response contains an object
        setLoggedIn(true);
        console.log("THE SERVER RESPONSE", serverResponse.data);
      } else {
        // Set loggedIn to false if the response does not contain an object
        setLoggedIn(false);
      }
    })
    .catch((error) => {
      console.error(error);
      // Set loggedIn to false if there's an error
      setLoggedIn(false);
    });
}, []);

    
  return (
    <>
<nav class="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <img src="/public/img/Thelogo.png" class="h-12 mr-2 w-12 p-0" alt="Flowbite Logo"/>

  <div class="flex md:order-2">
     
     
    
  {loggedIn ? (
          <button
            onClick={logout}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Logout
          </button>
        ) : (
          <Link to={'/login'}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>
        )}
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link  to={'/'} class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to={'/aboutUs'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About us</Link>
      </li>
      <li>
        <Link to={'/ourteachers'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Our Teachers</Link>
      </li>

    </ul>
  </div>
  </div>
</nav>


    
    
    </>
  )
}

export default Nav