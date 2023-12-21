import './App.css';
import EmployeeDetails from './components/EmployeeDetails';
import Home from './components/Home';
import Login from './components/Login';
import EmpData from './components/ReusabilityComponents/EmpData';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>

      

      <Route path='HomePage' element={<Home/>}>
         <Route path='EmployeeData' element={<EmpData/>}/>
      </Route>
      <Route path='EmployeeData' element={<EmpData/>}/>
    </Routes>
  );
}

export default App;
