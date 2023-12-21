import React,{createContext, useState} from 'react';
import i from '../styles/Employee.module.css';
import { IoSearch } from "react-icons/io5";
import EmpData from './EmpData';

export let context = createContext();
function SearchBar() {
  let [userValue,setUserValue] = useState('');
  let [ searchValue,setSearchVAlue] = useState();
  
  let searchFun =()=>{
    setSearchVAlue(userValue);
  }
  return (
    <context.Provider value={searchValue}>
    <div className={i.searchBar}>
         <div className={i.searchBarParent}> 
         <div>
          <input type="text" placeholder='Search with name' onChange={(e)=>setUserValue(e.target.value)} />
          </div>
          <div className={i.searchIconParent}>
          <IoSearch className={i.searchIcons} onClick={searchFun}/>
          </div>
         </div>
       </div>
       <EmpData/>
    </context.Provider>
   
  )
}

export default SearchBar