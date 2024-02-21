import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieTrailer } from '../utils/movieSlice';

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.movieTrailer)
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try{
      const data = await fetch('https://api.themoviedb.org/3/movie/933131/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
      const videoRes = json.results;
      console.log(json.results)

      const filterTrailer = videoRes.filter(video => video.type === "Trailer")
      const trailer = filterTrailer.length ? filterTrailer[0] : videoRes[0];
      console.log(trailer)
      dispatch(addMovieTrailer(trailer))

    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getMovieVideos();
  }, [])

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
