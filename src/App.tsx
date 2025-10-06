import React from 'react'
import {Outlet} from "react-router"
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {UserProvider} from "./Context/UseAuth"
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
   <UserProvider>
   <Navbar />
   <Outlet />
   <ToastContainer />
   </UserProvider>
   </>
  )
}

export default App
