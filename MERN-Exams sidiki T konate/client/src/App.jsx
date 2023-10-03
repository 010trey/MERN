import  React from 'react'
import { Routes,Route } from 'react-router-dom'
import PetList from './Components/PetList'
import PetShow from './Components/PetShow'
import Create from './Components/Create'
import Edit from './Components/Edit'


function App() {
  
  return (
    <>
     <Routes>
       <Route path='/' element={<PetList/>}/>
       
        <Route path='/pet/:id' element={<PetShow/>}/>
        
        <Route path='/pet/new' element={<Create/>}/>
        
        <Route path='/pet/edit/:id' element={<Edit/>}/>
     </Routes>
    </>
  )
}

export default App
