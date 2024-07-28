import Header from "./components/Header/Header";
import Hero from "./components/HeroContainer/Hero";
import Section1 from "./components/Section1/Section1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsList from "./components/Section2/ProductsList";
import Section3 from "./components/Section3/Section3";

const App = () => {
  return (
    <div className="relative px-6 md:px-9 lg:px-12">
      <Header />
      <Hero />
      <div className="-mx-6 md:-mx-9 lg:-mx-12">
        <Section1 />
      </div>
      <ProductsList />
      <Section3 />
    </div>
  );
};

export default App;
