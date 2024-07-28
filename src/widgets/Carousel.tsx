import Slider from "react-slick";
import "./carousel.css";
import img1 from "../assets/carousel/1.png";
import img2 from "../assets/carousel/2.png";
import img3 from "../assets/carousel/3.png";
import img4 from "../assets/carousel/4.png";

const Carousel = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-container w-full py-8">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="carousel-item" key={idx}>
            <img src={img} alt={`Item ${idx + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
