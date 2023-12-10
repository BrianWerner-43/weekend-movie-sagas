import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });  
    
  }, []);

  

  return (
    <main>

        <h1>MovieList</h1>
        <div data-testid="toDetails">
        <section className="movies">
            {movies.map((movie, i)=> (
                <MovieItem movie={movie} key={i}/> 
            ))}
        </section>
        </div>
    </main>

);
  
  
}


export default MovieList;
