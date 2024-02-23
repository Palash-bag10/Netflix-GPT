import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    console.log("Movies: ", movies)

  return (
    <div className='pl-6'>
    <h2 className=' mb-4 pt-3 text-xl text-white md:mt-5 md:text-2xl'> {title} </h2>
      <div className='flex flex-wrap overflow-x-scroll scrollbar-hidden scroll-smooth'>
        <div className='flex space-x-2'>
            {movies?.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
