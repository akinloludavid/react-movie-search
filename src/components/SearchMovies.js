import React, {useState} from 'react';
import MovieCard from './MovieCard';
const SearchMovies = () => {

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const getMovies = async(evt) =>{
    evt.preventDefault()
    const apikey =  "0ed95b6ac13a3d4d59e2e1ff7ec16de1";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${query}&page=1&include_adult=false`

    try{
      const res = await fetch(url)
      const data = await res.json();
      setMovies(data.results)
    }catch(err){
      console.log(err)
    }
    
  }
  return (
    <div className = "container">
      <form className = "form" onSubmit = {getMovies}>
          <label className = "label" htmlFor = "query">
            Search for a movie
          </label>
          <input type = "text" name = "query" className = "input" placeholder = "The wrath of man"
          value={query} onChange={(evt) =>setQuery(evt.target.value)}
          />
          <button className = "button" type = "submit">Submit</button>
      </form>

      <div className = "card-list">
        {movies.map((movie) => (
          <MovieCard movie = {movie} key = {movie.id}/>
        ))}
      </div>

    </div>
  )
}

export default SearchMovies