import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../api/api"
import { toast } from "react-toastify"
import { isAxiosError } from "axios"

function LogIn() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleFormSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try{
        const res = await api.post('/login',{email,password})
        console.log(res)
        toast.success(res.data.message)
        navigate('/')
      }
      catch(err){
        if(isAxiosError(err)){
          toast.error(err?.response?.data?.message)
        }
      }
    }
    return (
    <div className="w-screen h-screen px-4 flex items-center justify-center bg-[#ededed]">
    <div className="bg-white w-full max-w-md flex justify-center items-center flex-col rounded-lg p-5 sm:p-6 shadow-lg">
      <h1 className="font-bold text-2xl text-blue-500">Log In</h1>
      <form className="flex flex-col gap-4 w-full mt-2" onSubmit={handleFormSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border border-gray-300 focus:border-gray-500 outline-none py-2 px-3 rounded-md w-full" type="email" placeholder="Email" />
        <input  value={password} onChange={(e)=>setPassword(e.target.value)} className="border border-gray-300 focus:border-gray-500 outline-none py-2 px-3 rounded-md w-full" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white font-medium rounded-md py-3 hover:bg-blue-600 transition" type="submit">
          Log In
        </button>
      </form>
      <p className="mt-3 text-center">
        Don't have an account? 
        <Link to="/signup" className="cursor-pointer text-blue-700 mx-1 hover:underline">Sign Up</Link>
      </p>
    </div>
  </div>
  )
}

export default LogIn