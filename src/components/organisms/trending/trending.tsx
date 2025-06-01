//Styles
import CardCarousel from "@/components/molecules/card-carousel/card-carousel";
import styles from "./trending.module.css";

//Components
import SectionTitle from "@/components/atoms/section-title/section-title";

export default function Trending() {
    return (
        <section className={styles.Trending}>
            <section className="Content">
                <SectionTitle title="Trending Now" />

                <p className={styles.Description}>
                    Dive into the pulse of the film world with our &quot;Trending Now&quot; section, your go-to destination for the hottest and most talked-about movies in the industry.
                </p>
            </section>
            
            <CardCarousel />
        </section>
    )
}