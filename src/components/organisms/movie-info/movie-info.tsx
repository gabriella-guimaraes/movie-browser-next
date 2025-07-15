//Styles
import styles from "./movie-info.module.css";

//Models
import type { Movie } from "@/types/movie.model";

//Components
import { Grid } from "@mui/material";
import MoviePoster from "@/components/atoms/movie-poster/movie-poster";
import MovieDescription from "@/components/molecules/movie-description/movie-description";

interface MovieInfoProps {
    movie: Movie;
}

export default function MovieInfo({ movie }: MovieInfoProps) {

  const releaseYear = movie.release_date.split("-")[0];

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
              <h1 className={styles.MovieTitle}>{movie.original_title}</h1>
              
              <MovieDescription movieId={movie.id} releaseYear={releaseYear} overview={movie.overview} tagline={movie.tagline} title={movie.original_title} rating={movie.vote_average} totalVotes={movie.vote_count} />
            </Grid>
        </Grid>
    </section>
  );
}