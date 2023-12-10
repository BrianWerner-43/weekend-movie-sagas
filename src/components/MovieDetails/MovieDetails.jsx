import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";


function MovieDetails({}) {

    const movie = useSelector(store => store.currentDetails);
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch()
    const history = useHistory()
    const ID = useParams()
    
    // This will go back to the home page
    const backButton = () => {
        history.push("/")
    }

    useEffect(() => {
        console.log('expect to get ids:', ID);
        dispatch({
            type: "GET_DETAILS",
            payload: ID.id
        })

    }, []);

    

    return (
        <>
          <div>
            <div>
                <img data-testid="toDetails" src={movie.poster} />
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <ul>
                    {genres.map((genre, i) => (
                        <li key={i}>{genre.category}</li>
                    ))}
                </ul>

            <button data-testid="toList" onClick={backButton}>Home</button>
            </div>
          </div>
        
        </>
    )



}

export default MovieDetails;