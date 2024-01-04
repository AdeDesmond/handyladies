import { CallToAction } from "./call-to-action";
import { Header } from "./header";
import { SearchBar } from "./search-bar";

export const HeroSection = () => {
  return (
    <section className="w-full h-[60vh] bg-[url('/back.png')] md:bg-center bg-center  pt-4 relative ">
      <SearchBar />
      <Header />
      <CallToAction />
    </section>
  );
};
