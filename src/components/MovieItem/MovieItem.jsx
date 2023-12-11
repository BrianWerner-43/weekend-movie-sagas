import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
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
    //   Using Mateial Ui to make the poster images into cards
        <Grid>
        <Card sx={{ minWidth: 200, maxWidth: 200, minHeight: 450, maxHeigh: 450 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={movie.poster}
            title={movie.title}
            onClick={handleClick}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small" color="secondary" data-testid="toDetails" onClick={handleClick}>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    
    )



}

export default MovieItem;


