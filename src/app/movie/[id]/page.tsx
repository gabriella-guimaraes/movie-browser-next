"use client";

// Api
import { fetchMovieDetails } from "@/functions/api";

// Styles
import styles from "./page.module.css";

// External
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

// Models
import type { Movie } from "@/types/movie.model";

// Components
import MovieBanner from "@/components/atoms/movie-banner/movie-banner";

export default function Movie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  console.log("Movie ID:", id);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const getDetails: Movie = await fetchMovieDetails(Number(id));
        setMovieDetails(getDetails);
        console.log("Movie details:", getDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

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

  if (movieDetails) {
    //const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
    
    return (
      <div>
        <MovieBanner backdrop_path={backdropUrl} />
        <h1>Movie details</h1>
        <p>{movieDetails?.original_title}</p>
      </div>
    );
  }
}
