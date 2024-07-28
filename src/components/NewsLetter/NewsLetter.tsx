import img from "../../assets/newsLetter.png";
import Button from "../Button/Button";

const NewsLetter = () => {
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center h-[70%] lg:h-full">
        <img src={img} alt="" className="" />
      </div>
      <div className="flex -mt-40 lg:mt-0 flex-col items-center lg:justify-center">
        <h1 className="font-theme text-center text-2xl md:text-4xl mb-4 text-primary-gray">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-sm lg:text-base text-secondary-gray mb-5 text-center max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <input
          type="text"
          placeholder="michael@ymail.com"
          className="shadow-lg min-w-[70%] p-4 mb-8"
        />
        <Button text="Subscribe Now" />
      </div>
    </div>
  );
};

export default NewsLetter;
