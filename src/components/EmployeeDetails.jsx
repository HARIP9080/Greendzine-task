import React,{useState} from 'react';
import i from './styles/Employee.module.css';
import Footer from './ReusabilityComponents/Footer';
import Header from './ReusabilityComponents/Header';
import CompaneyLogo from './ReusabilityComponents/CompaneyLogo';
import SearchBar from './ReusabilityComponents/SearchBar';
import Home from './Home';

function EmployeeDetails() {
  let [home,setHome] =useState(false);
  let [emp,setEmp] =useState(true);
  let [temp,setTemp] = useState();

  
  let hey =(isActive)=>{
    console.log('home called')
    if(isActive == 'home active'){
      setHome(true);
      setEmp(false);
      setTemp(isActive);
    }else if(isActive == 'emp active'){
      setHome(false);
      setEmp(true);
      setTemp(isActive);
    }
  }
  return (
   <>
   { emp?
    <div className={i.grantParent}>
    <Header className={i.header}/>
     <div className={i.parentTag}>
         
        <CompaneyLogo/>
        <SearchBar/>
        
          <div className={i.empDataParent}>
              {/* <EmpData/> */}
         </div>
       
     </div>
     <div className={i.footerHead}>
 
     <Footer Fun ={hey} active={2}/>
     </div>
    </div> :null
   }
   {
     home? <Home/> : null
    }
   </>
  )
}

export default EmployeeDetails