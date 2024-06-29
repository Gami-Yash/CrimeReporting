import { Routes, Route } from 'react-router-dom';
import './App.css'
import Basic from '../pages/basic';
import LoginForm from './Components/Login/LoginForm';
import SignupForm from './Components/Login/SignupForm';
import CitizenPage from './Components/Citizen/CitizenPage';
import Police from './Components/lawenf/police';
import PoliceNext from './Components/lawenf/policeNext';
import AdminDashboard from './Components/admin/admin';
import LoginSignup from './Components/Login/LoginSignup';
import Login from './Components/Login/googleLogin';


function App() {
  return(
    <Routes>
      <Route path='/' element={< LoginSignup/>} />
      <Route path='/login' element={< LoginForm/>} />
      <Route path='/signup' element={<SignupForm/>} />
      <Route path='/citizen' element={<CitizenPage/>} />
      <Route path='/police' element={<Police/>} />
      <Route path='/policeNext' element={<PoliceNext/>} />
      <Route path='/policeNext' element={<PoliceNext/>} />
      <Route path='/admin' element={<AdminDashboard/>} />
      <Route path='/google' element={<Login />} />
    </Routes>
  )
}

export default App
