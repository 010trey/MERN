import { useState } from 'react'
import Homepage from './views/Homepage'
import {Routes,Route} from 'react-router-dom'
import ProfessorPage from './views/ProfessorPage'
import LoginPage from './views/LoginPage'
import DashboardAdmin from './views/DashboardAdmin'
import ChooseBoard from './views/ChooseBoard'
import RegisterStudent from './views/RegisterStudent'
import RegisterProf from './views/RegisterProf'
import StudentPage from './views/StudentPage'
import Createcourse from './views/Createcourse'
import Math from './components/StudentSubjects/Math'
import Chemistry from './components/StudentSubjects/Chemistry'
import Geography from './components/StudentSubjects/Geography'
import History from './components/StudentSubjects/History'
import Physics from './components/StudentSubjects/Physics'
import Biology from './components/StudentSubjects/Biology'
import AboutUs from './components/homepage/AboutUs'
import OurTeachers from './components/homepage/ourTeachers'


function App() {
  const [count, setCount] = useState(0)

  return (


 <>


    <Routes>
  <Route path='/ourteachers' element={<OurTeachers/>} />
  <Route path='/' element={<Homepage/>}/>
  <Route path='/aboutUs' element={<AboutUs/>}/>
  <Route path='/teacher' element={<ProfessorPage/>} />
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/admin' element={<DashboardAdmin/>}/>
  <Route path='/profpage' element={<ProfessorPage/>}/>
  <Route path='/choose' element={<ChooseBoard/>}/>
  <Route path='/registerstudent' element={<RegisterStudent/>}/>
  <Route path='/registerteacher' element={<RegisterProf/>}/>
  <Route path='/student' element={<StudentPage/>}/>
  <Route path='/createcourse' element={<Createcourse/>} />
  





  <Route path='/math' element={<Math/>}   />
  <Route path='/chemistry' element={<Chemistry/>}   />
  <Route path='/geography' element={<Geography/>}   />
  <Route path='/history' element={<History/>}   />
  <Route path='/physics' element={<Physics/>}   />
  <Route path='/mern' element={<Biology/>}   />

    </Routes>
</>


  )
}

export default App
