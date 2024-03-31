'use client'
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = () => {};

  return (
    <form>
      <div className=" flex flex-col max-w-max m-auto   mt-10">
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={handleChange}
          className=" border  py-2 px-6 m-2"

        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={handleChange}
          className=" border  py-2 px-6 m-2"

        />
        <div>
          <button type="submit"             className=" border  bg-slate-700 text-white py-2 px-6 m-2"
>
            Login
          </button>
          <button type="submit" className=" border  bg-slate-700 text-white py-2 px-6 m-2">

            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
