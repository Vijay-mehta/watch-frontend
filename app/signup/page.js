import { useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const Signup = () => {
    const [userdata, setUserData] = useState({ file: '', name: '', email: '', password: '' })
    const router = useRouter()
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setUserData((pre) => ({
            ...pre,
            [name]: type == "file" ? files[0] : value
        }))
    }
    console.log(userdata.file.name)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', userdata.file)
        formData.append('name', userdata.name)
        formData.append('email', userdata.email)
        formData.append('password', userdata.password)
        try {
            let data = await fetch('http://localhost:8000/api/register', {
                method: 'post',
                Header: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            })

            let res = await data.json();
            if (res.status == 200) {
                toast.success(res.message);
                setTimeout(()=>{
                    router.push('/login')
                },1000)
             

            } else {
                toast.error(`${res.error}`);
            }

        } catch (err) {
            console.log(err)
        }

    }
    return (

        <form onSubmit={handleSubmit}>
            <div class=" flex flex-col max-w-max  m-auto">
                <label for="Profile" class="mb-2">Profile:</label>
                <input type="file" onChange={(e) => handleInputChange(e)} name="file" required class="mb-4 px-4 py-2 border rounded-md" />
                {userdata.file ? <img className=" w-20  h-20 rounded-full" src={URL.createObjectURL(userdata.file)} alt="Rounded avatar" /> : ''}
                <label for="name" class="mb-2">Name:</label>
                <input type="text" onChange={(e) => handleInputChange(e)} name="name" required class="mb-4 px-4 py-2 border rounded-md" />
                <label for="email" class="mb-2">Eamil:</label>
                <input type="email" onChange={(e) => handleInputChange(e)} name="email" required class="mb-4 px-4 py-2 border rounded-md" />
                <label for="password" class="mb-2">password:</label>
                <input type="password" onChange={(e) => handleInputChange(e)} name="password" required class="mb-4 px-4 py-2 border rounded-md" />
                <div className=" flex   justify-start">   <button type="submit" className=" mr-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" >Sign Up</button>
                    <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={()=> router.push('/login')}>Login</button>
                    </div>

            </div>
        </form>




    )
}

export default Signup;