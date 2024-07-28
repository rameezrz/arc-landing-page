import Slider from "react-slick";
import "./section4.css";
import img1 from "../../assets/section4/1.png";
import img2 from "../../assets/section4/2.png";
import img3 from "../../assets/section4/3.png";
import img4 from "../../assets/section4/4.png";
import img5 from "../../assets/section4/5.png";
import img6 from "../../assets/section4/6.png";
import img7 from "../../assets/section4/7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Section4 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <section className="section4 h-[80vh] lg:h-screen bg-[#fafafa] py-8 px-6 md:px-9 lg:px-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-theme text-center text-2xl md:text-5xl mb-4 text-primary-gray">
          Follow Us On Instagram
        </h1>
        <p className="text-sm lg:text-base text-secondary-gray mb-3 text-center max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
      </div>
      <div>
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className="carousel-item !flex items-center justify-center sm:w-48 sm:h-72 overflow-hidden"
                key={idx}
              >
                <img
                  src={img}
                  alt={`Item ${idx + 1}`}
                  className="carousel-image object-contain w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Section4;
