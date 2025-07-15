"use client";

// Styles
import styles from "./movie-description.module.css";

//API
import { fetchMovieCredits } from "@/functions/api";

// Models
import type { Credits } from "@/types/credits.model";

// External
import { useEffect, useState } from "react";

// Components
import { Box, CircularProgress } from "@mui/material";
import MovieRating from "@/components/atoms/movie-rating/movie-rating";

interface MovieDescriptionProps {
    movieId: number;
    releaseYear?: string;
    overview?: string;
    tagline?: string;
    title?: string;
    rating: number;
    totalVotes: number;
}

export default function MovieDescription({ movieId, releaseYear, overview, tagline, title, rating, totalVotes }: MovieDescriptionProps) {
    const [movieCredits, setMovieCredits] = useState<Credits | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const getDetails: Credits = await fetchMovieCredits(Number(movieId));
        setMovieCredits(getDetails);
        console.log("Movie details:", getDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  console.log("Movie Credits:", movieCredits);

  const getDirectors = movieCredits?.crew
    .filter(member => member.job === "Director")
    .map(member => member.name);

  if (loading) {
    return (
      <Box
        className={styles.loadingContainer}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <section className={styles.MovieDescription}>
      <p>{releaseYear}
        {getDirectors && getDirectors.length > 0 && (
          <> – Directed by <span className={styles.MovieDirector}>{getDirectors.join(", ")}</span></>
        )}
      </p>

      <div className={styles.MovieOverview}>
        <p>{overview}</p>
      </div>

      <div className={styles.MovieTagline}>
        <p className={styles.Quote}>&quot;{tagline}&quot;</p>
        <p className={styles.Title}>- {title}</p>
      </div>

      <div className={styles.MovieRating}>
        <MovieRating rating={rating} totalVotes={totalVotes} />
      </div>
    </section>
  );
}