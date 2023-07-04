import axios from "axios";

const movieBaseUrl='https://api.themoviedb.org/3'
const api_key='cfaad08655a123f6334be8acee2d225a'

const movieByGenreBaseUrl= 'https://api.themoviedb.org/3/discover/movie?api_key=cfaad08655a123f6334be8acee2d225a'

// https://api.themoviedb.org/3/trending/all/day?api_key=cfaad08655a123f6334be8acee2d225a
const getTrendingVideos=axios.get(movieBaseUrl+`/trending/all/day?api_key=`+api_key);

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseUrl+'&with_genres='+id)

export default{
  getTrendingVideos,
  getMovieByGenreId
}