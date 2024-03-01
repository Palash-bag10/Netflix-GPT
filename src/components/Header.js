import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LANGUAGE_SUPPORTED, LOGO } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store => store.gpt.showGptSearch))

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch())
  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute z-10 flex w-full flex-row items-center justify-between bg-gradient-to-b from-black px-3'>
      <img
       className="cursor-pointer w-56"
       src={LOGO}
       alt="logo" />
       {user && (
          <div className='flex space-x-3'>
            {showGptSearch && <select 
            onChange={handleLanguageChange}
            className=' outline-none px-4 py-1 font-base bg-slate-500 text-green-100 text-[18px] rounded-md'>
            {
              LANGUAGE_SUPPORTED.map((lang) => (
                <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>
              ))
            }
            </select>}
            <button className=' bg-emerald-600 px-4 py-1 font-semibold text-white text-[18px] rounded-md'
            onClick={handleGptSearchClick}> 
             {showGptSearch ? "Home" : "GPT Search" }
            </button>
            <button 
            onClick={handleSignOut}
            className=' bg-red-500 px-3 py-1 text-white text-lg rounded-md font-semibold'>Sign Out</button>
        </div>
       )}
    </div>
  )
}

export default Header
