import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    // console.log("Movies: ", movies)

  return (
    <div className='px-4'>
    <h2 className=' text-lg md:text-3xl py-4 text-white'> {title} </h2>
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
