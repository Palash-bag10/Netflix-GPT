import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";


export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const getMovieVideos = async () => {
    try{
      const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
      const videoRes = json.results;
    //   console.log(json.results)

      const filterTrailer = videoRes.filter(video => video.type === "Trailer")
      const trailer = filterTrailer.length ? filterTrailer[0] : videoRes[0];
    //   console.log(trailer)
      dispatch(addMovieTrailer(trailer))

    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, [])
}