//Styles
import styles from "./section-title-gradient.module.css";

interface SectionTitleGradientProps {
    title: string;
}

export default function SectionTitleGradient({ title }: SectionTitleGradientProps) {
    return(
        <section className={styles.SectionTitleGradient}>
            <h1>{title}</h1>

            <div className={styles.Divider}></div>
        </section>
    )
}