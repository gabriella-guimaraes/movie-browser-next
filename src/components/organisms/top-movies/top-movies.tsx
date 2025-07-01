//Styles
import MoviesGrid from "@/components/molecules/movies-grid/movies-grid";
import styles from "./top-movies.module.css";

//Components
import SectionTitle from "@/components/atoms/section-title/section-title";

export default function TopMovies() {
    return(
        <section className={styles.TopMovies}>
            <section className="Content">
                <SectionTitle title="Top Movies" />

                <MoviesGrid />
            </section>
        </section>
    )
}