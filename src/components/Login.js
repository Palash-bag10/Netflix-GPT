import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg" />
      </div>
      <div className='relative h-screen flex items-center justify-center'>
        <form className="w-3/12 p-12 rounded-lg bg-black bg-opacity-80 text-white">
          <h2 className=' text-3xl font-bold text-white'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
            <div className='my-6'>
              {!isSignInForm && <input
              type="text" 
              placeholder="Full Name"
              className="w-full bg-zinc-800 mb-3 rounded-md p-3 text-white"
              />}
              <input
              type="text" 
              placeholder="Email Address"
              className="w-full bg-zinc-800 mb-3 rounded-md p-3 text-white"
              />
              <input
              type="password" 
              placeholder="Password"
              className="w-full bg-zinc-800 mb-3 rounded-md p-3 text-white"
              />
            </div>
            <button className='w-full bg-red-600 text-white rounded-md py-3 mt-5'>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className=' cursor-pointer py-6'>
              <p onClick={toggleSignInForm}>
                { isSignInForm 
                ? (<span classname="font-bold">New to Netflix? Sign Up</span> )
                : ( <span classname="font-bold">Already User. Sign In</span>) 
                }
                
              </p>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login
