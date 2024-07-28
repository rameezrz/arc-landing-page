type ButtonProps = {
  text: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`mt-4 px-4 py-1 md:px-8 md:py-2 bg-black text-white rounded-md md:rounded-xl ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
