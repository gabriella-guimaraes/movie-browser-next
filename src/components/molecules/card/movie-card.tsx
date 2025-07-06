//Styles 
import Link from "next/link";
import styles from "./movie-card.module.css";
import Image from "next/image";
import { Button, Card, CardActionArea,  } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme";

//Models
import { Movie } from "@/types/movie.model";

interface CardProps {
    movie: Movie;
}

export default function MovieCard({ movie }: CardProps) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movie/${movie.id}`

    function poster () {
      if(movie.poster_path){
        return <Image src={posterUrl} className="card-img-top" alt={movie.original_title} width={250} height={350} />
      }
      if(movie.poster_path == null){
        return <Image src="/assets/no-poster-found.png" className="card-img-top" alt="Poster not found" width={250} height={350} />
      }
    }

    return(
        <section className={styles.MovieCard}>
          <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 250, minHeight: 350, maxHeight: 350 }}>
              <CardActionArea>
                <div className={styles.CardBody}>
                  {poster()}
                  <div className={styles.CardDesc}>
                      <h2 className={styles.CardTitle}>{movie.original_title}</h2>

                      {/* <CardActions> */}
                        <Button size="small" variant="outlined">
                          <Link href={detailUrl} className="btn btn-primary">
                          Show details
                          </Link>
                        </Button>
                      {/* </CardActions> */}
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </ThemeProvider>
        </section>
    )
}