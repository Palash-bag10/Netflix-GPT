import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BODY_IMAGE } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleSubmitButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)
    if(message) return;

    if(!isSignInForm){
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
        // console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
    else{
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover brightness-50"
          src={BODY_IMAGE}
          alt="bg" />
      </div>
      <div className='relative h-screen flex items-center justify-center'>
        <form 
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 rounded-lg bg-black bg-opacity-80 text-white">
          <h2 className=' text-3xl font-bold text-white'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
            <div className='my-6'>
              {!isSignInForm && <input
              ref={name}
              type="text" 
              placeholder="Full Name"
              className="w-full bg-zinc-800 mb-3 rounded-md p-3 text-white"
              />}
              <input
              ref={email}
              type="text" 
              placeholder="Email Address"
              className="w-full bg-zinc-800 mb-3 rounded-md p-3 text-white"
              />
              <input
              ref={password}
              type="password" 
              placeholder="Password"
              className="w-full bg-zinc-800 mb-3 rounded-md p-3 text-white"
              />
              <p className=' text-pink-600'> {errorMessage} </p>
            </div>
            <button 
            onClick={handleSubmitButton}
            className='w-full bg-red-600 text-white rounded-md py-3 mt-5'>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className=' cursor-pointer py-6'>
              <p onClick={toggleSignInForm}>
                { isSignInForm 
                ? (<span className="font-bold">New to Netflix? Sign Up</span> )
                : ( <span className="font-bold">Already User. Sign In</span>) 
                }
              </p>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login
