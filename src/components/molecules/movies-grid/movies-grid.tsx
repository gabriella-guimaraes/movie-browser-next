"use client";

//Styles
import styles from "./movies-grid.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

//Models
import { Movie } from "@/types/movie.model";

//External
import React, { useState, useEffect } from "react";

//API
import { fetchCriticsChoice } from "@/functions/api";

//Components
import MovieCard from "../card/movie-card";

export default function MoviesGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchCriticsChoice();
        setMovies(response);
      } catch (err) {
        console.error("Erro ao carregar filmes populares:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <Box
        className={styles.loadingContainer}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px", // ou a altura que fizer sentido para a sua UI
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <section className={styles.MoviesGrid}>
      <section className="teste">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={styles.container}
        >
          {movies.map((movie) => (
            <Grid key={movie.id} size={{ xs: 2, sm: 2, md: 3 }} className={styles.Cards}>
              <MovieCard movie={movie} />
            </Grid>
            // <div key={idx} className={idx === 0 ? styles.firstCard : ""}>
            //   <MovieCard movie={movie} />
            // </div>
          ))}
        </Grid>
      </section>
    </section>
  );
}
