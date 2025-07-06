"use client";

//Styles
import styles from "./card-carousel.module.css";
import { Grid, IconButton } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

//Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//Components
import MovieCard from "../card/movie-card";

//Models
import { Movie } from "@/types/movie.model";

//External
import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "@/functions/api";

export default function CardCarousel() {
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Atualiza quantos cards cabem na tela conforme largura da janela
  const updateCardsPerView = () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      setCardsPerView(3);
    } else if (width >= 800) {
      setCardsPerView(2);
    } else {
      setCardsPerView(1);
    }
  };

  // Quando o componente monta, configura listener de resize e busca os filmes
  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    // Chama a função fetchPopularMovies para buscar a lista de filmes
    const loadMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchPopularMovies();
        setMovies(response);
      } catch (err) {
        console.error("Erro ao carregar filmes populares:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  // Avança um card (se houver espaço)
  const slideForward = () => {
    if (index < movies.length - cardsPerView) {
      setIndex((prev) => prev + 1);
      setTransform((prev) => prev - 390);
    }
  };

  // Volta um card (se não estiver no início)
  const slideBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      setTransform((prev) => prev + 390);
    }
  };

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
    <div>

      <div className={styles.slider}>
        <div
          className={styles.slideTrack}
          style={{ transform: `translateX(${transform}px)` }}
        >
          {movies.map((movie, idx) => (
            <div key={idx} className={idx === 0 ? styles.firstCard : ""}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className={styles.container}
      >
        <Grid size={{ xs: 12, sm: 2, md: 2 }} justifyContent="center">
          <IconButton
            aria-label="back_btn"
            className={styles.btn}
            color="primary"
            disabled={index === 0}
            onClick={slideBackward}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="forward_btn"
            className={styles.btn}
            color="primary"
            disabled={index >= movies.length - cardsPerView}
            onClick={slideForward}
          >
            <ArrowForwardIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
