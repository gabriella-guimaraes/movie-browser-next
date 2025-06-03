//Styles
import styles from "./explore.module.css";
import { Grid } from "@mui/material";

//Components
import SectionTitleGradient from "@/components/atoms/section-title-gradient/section-title-gradient";
import PhotoSlide from "@/components/molecules/photo-slide/photo-slide";

const images = [
  '/assets/absolute-cinema1.png',
  '/assets/absolute-cinema2.jpg',
  '/assets/absolute-cinema3.jpg',
  '/assets/absolute-cinema4.jpg'
];

export default function Explore() {
    return(
        <section className={styles.Explore}>
            <section className="Content">
                <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        <Grid size={{ xs: 6, sm:6, md: 4 }}>
                            <SectionTitleGradient title="Explore, Discover, Watch" />
                        </Grid>

                        <Grid size={{ xs:12, sm: 12, md: 12 }}>
                            <p className={styles.Text}>Dive into the pulse of the film world with our &quot;Trending Now&quot; section, your go-to destination for the hottest and most talked-about movies in the industry.</p>
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        <PhotoSlide images={images} />
                    </Grid>
                </Grid>
            </section>
        </section>
    )
}