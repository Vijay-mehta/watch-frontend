import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import {useRouter} from 'next/navigation'

const Signup = () => {
  const [userData, setUserData] = useState({
    file: "",
    name: "",
    email: "",
    password: "",
  });
  const route =useRouter();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserData((pre) => ({
      ...pre,
      [name]: name === "file" ? files[0]?.name : value,
    }));
  };
  console.log("useData1", userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("image", userData.file);
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);

    console.log("data2", formData);
    let data = await fetch("http://localhost:8000/api/register", {
      method: "post",
      Header: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    let res = await data.json();
    if (res.status == 200) {
      toast.success(`${res.message}`);
     setTimeout(()=>{
      route.push('/login') 
     },1000) 
    }
  };

  return (
    <>
      <h1 className=" mb-4  mt-20 text-center  font-bold">
        Create Your Profile:{" "}
      </h1>

      <form
        onSubmit={handleSubmit}
        className=" flex  m-auto max-w-max  p-8 shadow-lg  "
      >
        <div>
          <Image
            src="/logo.avif"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className=" flex flex-col  justify-around   ">
          <input
            type="file"
            placeholder="Add Your Photo"
            name="file"
            onChange={handleChange}
            className=" border  py-2 px-6  mx-2"
          />
          <input
            type="name"
            placeholder="Enter Your Name"
            name="name"
            onChange={handleChange}
            className=" border    py-2 px-6 mx-2"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            className=" border  py-2 px-6 mx-2"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            className=" border  py-2 px-6 mx-2"
          />
          <div>
            {" "}
            <button
              type="submit"
              className=" border  bg-slate-700 text-white py-2 px-6 m-2"
            >
              Signup
            </button>
            <Link
              href="/login"
              className=" border  bg-slate-700 text-white py-2 px-6 m-2"
            >
            Login</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
