//Styles
import styles from "./section-title.module.css";

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle( { title }: SectionTitleProps ){
    return(
        <section className={styles.SectionTitle}>
            <h1 className="animeDown">{title}</h1>

            <div className={styles.Divider}></div>
        </section>
    )
}