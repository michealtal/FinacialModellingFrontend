import React from 'react'
import {Outlet} from "react-router"
import './App.css'
import Navbar from './Component/Navbar/Navbar'

function App() {
 
    
    
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await searchCompany("AAPL");
  //     console.log("Company search result:", result); // this should now show the array of matches
  //   };
  //   fetchData(); 
  // }, []);
  

  return (  
   <>
   <Navbar />
   <Outlet />
   </>
  )
}

export default App
