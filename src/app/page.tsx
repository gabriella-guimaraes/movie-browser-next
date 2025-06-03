import Hero from "@/components/molecules/hero/hero"
import Explore from "@/components/organisms/explore/explore";
import Trending from "@/components/organisms/trending/trending";

export default function Home() {
  return (
    <section>
      <Hero />
      <Trending />
      <Explore />
    </section>
  );
}
