"use client";

//Styles
import styles from "./photo-slide.module.css";
import { Box, Fade } from "@mui/material";
import Image from "next/image";

//External
import React, { useEffect, useState } from "react";

interface PhotoSlideProps {
  images: string[];
}

export default function PhotoSlide({ images }: PhotoSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setShowImage(true);
      }, 500); // Tempo para o fade-out antes de trocar a imagem
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className={styles.PhotoSlide}>
      <Box
        position="relative"
        width="100%"
        height={{ xs: 300, md: 500 }}
        overflow="hidden"
        borderRadius={2}
        boxShadow={3}
      >
        <Fade in={showImage} timeout={500} key={images[currentIndex]}>
          <Box position="relative" width="100%" height="100%">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>
        </Fade>
      </Box>
    </section>
  );
}
