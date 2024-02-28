import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)

  return (
    <div className='flex justify-center pt-[10%]'>
      <form className=' bg-slate-300 w-1/2 mx-2 grid grid-cols-12 p-4'>
        <input
         type="text"
         placeholder={lang[langKey].gptSearchPlaceholder}
         className=' col-span-9 px-3 outline-none'
          />
        <button className=' col-span-3 bg-rose-600 py-2 px-4 rounded-lg mx-2 text-white font-semibold text-xl'>
            {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
