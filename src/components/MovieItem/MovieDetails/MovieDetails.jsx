import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";


function MovieDetails() {

    const movie = useSelector(store => store.currentDetails);
    const genres = useSelector(store.genres);
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

    console.log('Details.length:', movie.length, movie);

    return (
        <>
          <div>
            <button onClick={backButton}>Home</button>
          </div>
        
        </>
    )



}

export default MovieDetails;