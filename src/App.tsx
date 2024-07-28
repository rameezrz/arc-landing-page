import Header from "./components/Header/Header";
import Hero from "./components/HeroContainer/Hero";
import Section1 from "./components/Section1/Section1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsList from "./components/Section2/ProductsList";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import { Divider, FloatButton, Tooltip } from "antd";

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
      <div className="-mx-6 md:-mx-9 lg:-mx-12">
        <Section4 />
      </div>
      <NewsLetter />
      <div className="-mx-6 md:-mx-9 lg:-mx-12">
        <Divider className="border-[1px]" />
      </div>
      <Footer />
      <Tooltip placement="left" title="back to top">
        <FloatButton.BackTop
          visibilityHeight={0}
          className="scale-125 shadow-xl"
        />
      </Tooltip>
    </div>
  );
};

export default App;
