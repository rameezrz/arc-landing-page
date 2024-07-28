import React from "react";
import { Card } from "antd";
import { MdOutlineStar } from "react-icons/md";

const { Meta } = Card;

const stars = [1, 2, 3, 4, 5];

type cardInputs = {
  img: string;
  title: string;
  company?: string;
  reviews: string;
  price: string;
  bottomText?: string;
  className?: string;
};

const ProductCard: React.FC<cardInputs> = ({
  img,
  title,
  company,
  reviews,
  price,
  bottomText,
  className,
}) => (
  <Card
    hoverable
    className={`shadow-xl hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-2xl w-full ${className}`}
    cover={<img alt={title} src={img} className="rounded-lg p-3" />}
  >
    <Meta
      title={
        <div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xl sm:text-2xl">{title}</p>
              <div className="flex">
                {stars.map((star) => (
                  <MdOutlineStar
                    key={star}
                    className="text-sm sm:text-lg text-[#FCA120]"
                  />
                ))}
              </div>
            </div>
            <p className="text-secondary-gray text-xs sm:text-base">
              {company}
            </p>
          </div>
          <div className="my-3">
            <p className="text-xs sm:text-base">{reviews}</p>
          </div>
          <div>
            <h1 className="text-2xl">₹{price}</h1>
            <p className="text-red-500 text-xs font-normal sm:text-base">
              {bottomText}
            </p>
          </div>
        </div>
      }
    />
  </Card>
);

export default ProductCard;
