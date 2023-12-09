import MovieDetails from "../MovieDetails/MovieDetails";
// import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function MovieItem({movie}) {

    // const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        console.log('move:', movie);
        history.push(`/details/${movie.id}`);
    }

    return (
<<<<<<< HEAD
        <div>
=======
        <div data-testid="movieDetails">
>>>>>>> 9dc6e0756292334c56372e64efd92a25410fb0db
            <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
        <button onClick={handleClick}>Details</button>
        </div>
    )



}

export default MovieItem;


