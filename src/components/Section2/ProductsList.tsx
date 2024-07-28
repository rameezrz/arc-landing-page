import { productCardImages, productIcons } from "../../data";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import "./productList.css";

const ProductsList = () => {
  return (
    <section className="productList mb-12">
      <h1 className="font-theme text-center text-2xl md:text-5xl mb-8 text-primary-gray">
        New Arrivals
      </h1>
      <div className="grid gap-y-6 grid-cols-4 lg:grid-cols-8 lg:gap-y-0">
        {productIcons.map((icon, idx) => (
          <div
            key={idx}
            className="w-20 h-20 border-2 place-self-center border-gray-700 overflow-hidden rounded-lg cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300"
          >
            <img src={icon} alt="" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 lg:gap-16 grid-cols-2 lg:grid-cols-3">
        {productCardImages.map((img, idx) => (
          <ProductCard
            key={idx}
            img={img}
            title="Hand Clock"
            company="Al Karam"
            price="999.00"
            reviews="(4.1k) Reviews"
            bottomText="Almost Sold Out"
            className="place-self-center "
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button text="View More" />
      </div>
    </section>
  );
};

export default ProductsList;
