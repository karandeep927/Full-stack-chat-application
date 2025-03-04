import {   useState } from "react"
import { Link } from "react-router-dom"

function Signup() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(firstName,lastName,email,password,confirmPassword)
    }
    console.log('render')

  return (
    <div className="w-screen h-screen px-4 flex items-center justify-center bg-[#ededed]">
    <div className="bg-white w-full max-w-md flex justify-center items-center flex-col rounded-lg p-5 sm:p-6 shadow-lg">
      <h1 className="font-bold text-2xl text-blue-500">Register Now</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-full mt-2">
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="border border-gray-300 focus:border-gray-500 outline-none py-2 px-3 rounded-md w-full" type="text" placeholder="First Name" />
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className="border border-gray-300 focus:border-gray-500 outline-none py-2 px-3 rounded-md w-full" type="text" placeholder="Last Name" />
        </div>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border border-gray-300 focus:border-gray-500 outline-none py-2 px-3 rounded-md w-full" type="email" placeholder="Email" />
        <input  value={password} onChange={(e)=>setPassword(e.target.value)} className="border border-gray-300 focus:border-gray-500 outline-none py-2 px-3 rounded-md w-full" type="password" placeholder="Password" />
        <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="border border-gray-300 focus:border-gray-500 outline-none py-2 px-3 rounded-md w-full" type="password" placeholder="Confirm Password" />
        <button className="bg-blue-500 text-white font-medium rounded-md py-3 hover:bg-blue-600 transition" type="submit">
          Sign Up
        </button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? 
        <Link to="/login" className="cursor-pointer text-blue-700 mx-1 hover:underline">Log In</Link>
      </p>
    </div>
  </div>
  
  )
}

export default Signup