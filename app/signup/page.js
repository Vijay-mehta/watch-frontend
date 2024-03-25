import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
const Signup = () => {
  const [userData, setUserData] = useState({
    file: "",
    username: "",
    email: "",
    password: "",
  });

  const handleVlaue = (value, name, type) => {
    setUserData((pre) => ({
      ...pre,
      [name]: type == "file" ? value.name : value,
    }));
  };
  console.log("userDatga", userData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", userData.file);
    formData.append("name", userData.username);
    formData.append("email", userData.email);
    formData.append("password", userData.password);

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
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex flex-col max-w-min  m-auto">
        <h1 className=" mb-5   mt-16  text-center ">User Profile:</h1>
        <InputField
          type="file"
          placeholder="Enter Your Photo"
          label="Avtar :"
          name="file"
          handleVlaue={handleVlaue}
          className=" border  py-4   mt-3  mb-3"
        />
        <InputField
          type="text"
          placeholder="Enter Your Name"
          label="Name :"
          name="username"
          handleVlaue={handleVlaue}
          className=" border px-6 py-4   mt-3  mb-3"
        />
        <InputField
          type="email"
          placeholder="Enter Your Email"
          label="Email :"
          name="email"
          handleVlaue={handleVlaue}
          className=" border px-6 py-4   mt-3 mb-3"
        />
        <InputField
          type="password"
          placeholder="Enter Your Password"
          label="Password :"
          name="password"
          handleVlaue={handleVlaue}
          className=" border px-6 py-4   mt-3 mb-3"
        />
        <Button
          type="submit"
          className=" bg-slate-700 text-white  px-5 py-4 border"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default Signup;
