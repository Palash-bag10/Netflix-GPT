import React from 'react'
import { useSelector } from 'react-redux'
import { useMovieTrailer } from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.movieTrailer)
  
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
       width="560" 
       height="315" 
       src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?si=OASUz0OGLvFDtiMX" }
       title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
       </iframe>
    </div>
  )
}

export default VideoBackground
