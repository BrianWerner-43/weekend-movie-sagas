import MovieDetails from "../MovieDetails/MovieDetails";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

// This will load to the details page and dispaly the description
function MovieItem({movie}) {
    const dispatch = useDispatch();

    const history = useHistory();

    const handleClick = () => {
        console.log('move:', movie);
        dispatch({
            type: "GET_DETAILS",
            payload: movie.id
        })
        history.push(`/details/${movie.id}`);
    }

    return (
     <div data-testid="movieItem">
        <div>
            <h3>{movie.title}</h3>
              <img  onClick={handleClick} data-testid="toDetails" src={movie.poster} alt={movie.title}/>
       
        </div>
    </div>
    )



}

export default MovieItem;


