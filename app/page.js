'use client'
import Signup from "./signup/page";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./login/page";
import InputField from "./components/InputField";
import { useState } from "react";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import Accordion from "./components/accordion";
import Pagination from "./components/Pagination";
export default function Home() {
const[data,setData] =useState('')
  const handleVlaue = (value) => {
    setData(value)
  }
  console.log("dwdad",data)
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
];

const handleDropValue=(value)=>{
console.log("dropValue",value)
}

const nPage=
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
  }
]
  return (
    <>
    {/* <Pagination nPage={nPage}/> */}
    {/* <Accordion><button>click</button></Accordion> */}
    {/* {data}
      <InputField type='text' placeholder='Enter Your Nmae' 
      name='name'
      required={true} handleVlaue={handleVlaue} 
      label='User Name'
      className=' border-solid border-2 p-2'
      minLength={0}
      maxLength={40}
      pattern="[A-Za-z0-9]+"
      /> */}

{/* <InputField type='number' placeholder='Enter Your Number' 
      name='number'
      required={true} handleVlaue={handleVlaue} 
      className=' border-solid border-2 p-2'
      autoFocus
      pattern="[0-7]+"
      /> */}
      {/* <InputField type='checkbox' label='terms'handleVlaue={handleVlaue}  />
      <InputField type="radio" name="done" handleVlaue={handleVlaue}/>
      <InputField type="radio" name="done" handleVlaue={handleVlaue}/>
      <InputField type="radio" name="done" handleVlaue={handleVlaue}/> */}

      {/* <Button type="submit" className="  bg-black  py-2 px-8  rounded  text-red-100" >helo</Button> */}
      <Signup/> 
      {/* <Login/> */}
      {/* <Login/> */}
      <ToastContainer />
      {/* <DropDown options={options} handleDropValue={handleDropValue} className=" py-3  px-10 border "/> */}
    </>
  );
}
