import MovieDetails from "../MovieDetails/MovieDetails";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// This will load to the details page and dispaly the description
function MovieItem({movie}) {

    const history = useHistory();

    const handleClick = () => {
        console.log('move:', movie);
        history.push(`/details/${movie.id}`);
    }

    return (
     <div data-testid="movieItem">
        <div>
            <h3>{movie.title}</h3>
              <img data-testid="toDetails" src={movie.poster} alt={movie.title}/>
        <button onClick={handleClick}>Details</button>
        </div>
    </div>
    )



}

export default MovieItem;


