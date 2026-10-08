import { Link } from "react-router-dom"

import logo from "../assets/new-logo-black.png"

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[85%] sm:w-120 aspect-4/5 border rounded-lg p-8">
        <form>
          <div className="w-full h-12 flex flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold whitespace-nowrap">Create Account</h1>
            <img src={logo} className="h-8 sm:h-full w-auto "></img>
          </div>
            

            {/* Input */}
          <div className="my-4">
            <p className="text-sm">Full Name</p>
            <input type="text" placeholder="Enter your full name" className="h-12 w-full border rounded-lg px-2 text-sm"></input>
          </div>
          <div className="mt-6">
            <p className="text-sm">Email Address</p>
            <input type="email" placeholder="Enter your email address" className="h-12 w-full border rounded-lg px-2 text-sm"></input>
          </div>
          <div className="my-4">
            <p className="text-sm">Create Password</p>
            <input type="password" placeholder="Enter password" className="h-12 w-full border rounded-lg px-2 text-sm"></input>
          </div>
          <div className="my-4">
            <p className="text-sm">Confirm Password</p>
            <input type="password" placeholder="Re-enter password" className="h-12 w-full border rounded-lg px-2 text-sm"></input>
          </div>

          {/* Sign In */}
          <button className="w-full h-12 bg-green-500 border rounded-lg mt-2 hover:bg-green-400 cursor-pointer">
            Register
          </button>
          
          {/* Register */}
          <div className="flex justify-center my-4">Already a member? 
            <Link to={"/sign-in"} className="ml-2 text-blue-800 hover:underline">Login.</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register
