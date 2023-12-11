import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";

// This will get all the movie details and genres
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
            type: "GET_GENRES",
            payload: ID.id
        })

    }, []);
    
    

    return (
        
          <div data-testid="movieDetails">
            <div>
                <img src={movie.poster} />
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <p> Genres:</p>
                
                    {genres.map((genre, i) => (
                        <p key={i}>{genre.category}</p>
                    ))}
              
             {/*styled the button in material UI  */}
            <Button data-testid="toList" size="small" variant="contained" color="success" onClick={backButton}>🏠</Button>
            </div>
          </div>
        
        
    )



}

export default MovieDetails;