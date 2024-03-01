import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null;

  return (
    <div className=' w-32 duration-500 hover:scale-95 hover:cursor-pointer md:w-44'>
      <img 
      src={IMG_CDN_URL + posterPath } 
      alt="Movie Card" />
    </div>
  )
}

export default MovieCard
