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
<<<<<<< HEAD
        <h1>MovieList</h1>
        <div data-testid='movieItem'>
        <section className="movies">
            {movies.map((movie, i)=> (
                <MovieItem movie={movie} key={i}/> 
            ))}
        </section>
        </div>
=======
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              
            </div>
          );
        })}
      </section>
>>>>>>> 9dc6e0756292334c56372e64efd92a25410fb0db
    </main>

);
  
  
}


export default MovieList;
