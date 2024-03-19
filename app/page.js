'use client'
import Signup from "./signup/page";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Login from "./login/page";
export default function Home() {
  return (
    <>

   <div  className="  mb-10"><Signup/></div> 
   {/* <Login/> */}
   <ToastContainer />
    </>
  );
}
