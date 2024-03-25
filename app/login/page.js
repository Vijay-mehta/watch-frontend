import Button from "../components/Button";
import InputField from "../components/InputField";

const Login = () => {
  const handleVlaue = (value, name, type) => {
    console.log("name", value, name, type);
  };

const handleSubmit=(e)=>{
e.preventDefault()
}

  return (
    <form onSubmit={handleSubmit}>

      <div className=" flex flex-col  max-w-max m-auto  ">
      <h1 className=" text-center mb-5   mt-16 ">Login</h1>

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
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
