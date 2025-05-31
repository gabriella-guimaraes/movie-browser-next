//Styles
import styles from "./hero.module.css";
export default function Hero(){
    return(
        <section className={styles.Hero}>
            <h1 className="BannerTitle animeLeft">Movie Browser</h1>
            <p className="SubTitle text-focus-in">Track films you’ve watched. <br/>
                Tell your friends what’s good.</p>
        </section>
    )
}