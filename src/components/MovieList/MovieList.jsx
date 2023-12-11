
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { Grid } from '@mui/material';
function MovieList() {


  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });  
    
  }, []);

  

  return (
    <main>

        <h1 className='List-header'>MovieList</h1>
        <div>
        <Grid className="movies">
            {movies.map((movie, i)=> (
                <MovieItem movie={movie} key={i}/> 
            ))}
        </Grid>
              
        </div>
    </main>

);
  
  
}


export default MovieList;
