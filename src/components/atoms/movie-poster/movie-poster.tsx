//Styles
import styles from "./movie-poster.module.css";

//External
import Image from "next/image";

export default function MoviePoster({ posterPath }: { posterPath: string }) {
  return (
    <section className={styles.MoviePoster}>
      <Image
        width={300}
        height={450}
        priority
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Movie Poster"
        className={styles.PosterImage}
      />
    </section>
  );
}