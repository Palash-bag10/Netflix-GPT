import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS, OPENAI_KEY } from '../utils/constants'
import { gptSearchMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);
    const dispatch = useDispatch()

    const searchMovieTMDB = async(movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)

      const result = await data.json();

      return result.results;
    }

    const handleGptSearchClick = async() => {
      console.log(searchText.current.value)

      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
    
      console.log(gptResult.choices?.[0]?.message.content);

      const gptMovie = gptResult.choices?.[0]?.message?.content.split(",")

      const movieData = gptMovie.map((movie) => searchMovieTMDB(movie))

      const movieResults = await Promise.all(movieData)
      console.log(movieResults)

      dispatch(gptSearchMovieResult({movieNames:gptMovie , movieResults:movieResults}))
    }

  return (
    <div className='flex justify-center pt-[10%]'>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className=' bg-slate-300 w-1/2 mx-2 grid grid-cols-12 p-4'>
        <input
         ref={searchText}
         type="text"
         placeholder={lang[langKey].gptSearchPlaceholder}
         className=' col-span-9 px-3 outline-none'
          />
        <button 
        onClick={handleGptSearchClick}
        className=' col-span-3 bg-rose-600 py-2 px-4 rounded-lg mx-2 text-white font-semibold text-xl'>
            {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
