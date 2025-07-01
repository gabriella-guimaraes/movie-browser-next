import Hero from "@/components/molecules/hero/hero"
import Explore from "@/components/organisms/explore/explore";
import TopMovies from "@/components/organisms/top-movies/top-movies";
import Trending from "@/components/organisms/trending/trending";

export default function Home() {
  return (
    <section>
      <Hero />
      <Trending />
      <Explore />
      <TopMovies />
    </section>
  );
}
