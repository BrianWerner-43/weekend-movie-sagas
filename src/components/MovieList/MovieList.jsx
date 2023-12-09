import React, { useEffect } from 'react';
import { useDispatch, useSelector, useHistory } from 'react-redux';
import './MovieList.css'

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory()

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  // To load to the details page
  history.push('/details')

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
