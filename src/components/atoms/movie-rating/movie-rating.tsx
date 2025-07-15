//Styles
import styles from "./movie-rating.module.css";

// Components
// import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface MovieRatingProps {
    rating: number;
    totalVotes: number;
}

export default function MovieRating({ rating, totalVotes }: MovieRatingProps) {
    const ratingOutOfFive = rating / 2;
     console.log("Rating:", rating, "Total Votes:", totalVotes);
    return (
        <section className={styles.MovieRating}>
            <p className={styles.RatingNumber}>{rating.toFixed(1)} / 10</p>
            <Stack direction="row" spacing={1}>
                <Rating
                    name="movie-rating"
                    value={ratingOutOfFive}
                    precision={0.5}
                    readOnly
                />
            </Stack>
        </section>
    )
}