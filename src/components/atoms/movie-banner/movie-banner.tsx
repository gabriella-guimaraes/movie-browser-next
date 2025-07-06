// styles
import Image from "next/image";
import styles from "./movie-banner.module.css";

interface MovieBannerProps {
    backdrop_path: string;
}

export default function MovieBanner({ backdrop_path }: MovieBannerProps) {
    console.log("Backdrop Path:", backdrop_path);
    return (
        <section className={styles.MovieBanner}>
            {/* <div
                className={styles.backdrop}
                style={{ backgroundImage: `url(${backdrop_path})` }}
              ></div> */}
            <Image src={backdrop_path} alt="movie banner" width={1000} height={200} className={styles.bannerImg} />
        </section>
    );
}