'use client'
import { useState } from "react";
import { toast } from 'react-toastify';
const Login = () => {
    const [userData, setUserData] = useState({ email: '', password: '' })
    console.log(userData)
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((pre) => ({
            ...pre,
            [name]: value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = await fetch('http://localhost:8000/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password
            })
        })

        let res = await data.json()
        console.log(res)
        if (res.status == 200) {
            toast.success(res.message)

        } else {
            toast.error(res.error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col   m-auto  w-[500px]">
                <label className=" mb-2">User Email:</label>
                <input type="email" className=" mb-4 px-4 py-2 border  rounded-md" placeholder="Enter Your Email" name="email" onChange={(e) => handleChange(e)} />
                <label className=" mb-2">password:</label>
                <input type="password" className=" mb-4 px-4 py-2 border rounded-md" placeholder="Enter Your password" name="password" onChange={(e) => handleChange(e)} />
                <div className=" flex   justify-start">   <button type="submit" className=" mr-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" >Sign Up</button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" >Login</button></div>
            </div>
        </form>
    )
}

export default Login;