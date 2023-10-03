import  React from 'react'
import { Routes,Route } from 'react-router-dom'
import PlayerList from './Components/PlayerList'
import PlayerShow from './Components/PlayerShow'
import Create from './Components/Create'
import Edit from './Components/Edit'


function App() {
  
  return (
    <>
     <Routes>
       <Route path='/' element={<PlayerList/>}/>
        
        <Route path='/players/:id' element={<PlayerShow/>}/>
        
        <Route path='/players/new' element={<Create/>}/>
        
        <Route path='/players/edit/:id' element={<Edit/>}/>
     </Routes>
    </>
  )
}

export default App
