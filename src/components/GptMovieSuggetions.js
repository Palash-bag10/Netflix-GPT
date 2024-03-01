import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggetions = () => {

  const {movieResults, movieNames} = useSelector((store) => store.gpt);

  if(!movieNames) return null;

  return (
    <div className=' p-5 m-5 bg-slate-800 bg-opacity-80'>
      <div>
        {
          movieNames.map((movieName, index) => (
            <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
            />
          ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggetions
