//Styles
import styles from "./movie-info.module.css";

//Models
import type { Movie } from "@/types/movie.model";

//Components
import MoviePoster from "@/components/atoms/movie-poster/movie-poster";
import { Grid } from "@mui/material";

interface MovieInfoProps {
    movie: Movie;
}

export default function MovieInfo({ movie }: MovieInfoProps) {
  return (
    <section className={styles.MovieInfo}>
        <Grid 
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">
            <Grid size={{ xs:6, sm: 5, md: 4 }}>
              <MoviePoster posterPath={movie.poster_path} />
            </Grid>

            <Grid size={{ xs: 12, sm: 7, md: 8 }}>
              <h1>{movie.original_title}</h1>
              <p>This is the movie info component.</p>
            </Grid>
        </Grid>
    </section>
  );
}