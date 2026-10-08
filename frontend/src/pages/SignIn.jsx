import { Link } from "react-router-dom"

import logo from "../assets/new-logo-black.png"

const SignIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[85%] sm:w-90 aspect-4/5 border rounded-lg p-8">
        <form>
          <h1 className="text-3xl font-bold">Welcome back!</h1>

          {/* Input */}
          <div className="mt-6">
            <p className="text-sm">Email Address</p>
            <input type="text" placeholder="abc@example.com" className="h-12 w-full border rounded-lg px-2 text-sm"></input>
          </div>
          <div className="my-4">
            <p className="text-sm">Password</p>
            <input type="password" placeholder="********" className="h-12 w-full border rounded-lg px-2 text-sm"></input>
          </div>

          {/* Sign In */}
          <button className="w-full h-12 bg-green-500 border rounded-lg mt-2 hover:bg-green-400 cursor-pointer">
            Sign In
          </button>
          
          {/* Register */}
          <div className="flex justify-center my-4">Not a member? 
            <Link to={"/register"} className="ml-2 text-blue-800 hover:underline">Register here.</Link>
          </div>

          <div className="w-full h-full">
            <img src={logo} className="scale-90"></img>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
