import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });   
    
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, [])

  return (
    <div className='absolute z-10 flex w-full flex-row items-center justify-between bg-gradient-to-b from-black px-3'>
      <img
       className="cursor-pointer w-56"
       src={LOGO}
       alt="logo" />
       {user && <div>
        <button 
        onClick={handleSignOut}
        className=' bg-red-500 px-3 py-1 text-white text-lg rounded-md font-semibold'>Sign Out</button>
       </div>}
    </div>
  )
}

export default Header
