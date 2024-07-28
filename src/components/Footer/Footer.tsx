const links = [
  "Support center",
  "Invoicing",
  "Contact",
  "Careers",
  "Blog",
  "FAQs",
];

const Footer = () => {
  return (
    <footer className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <h1 className="font-theme text-xl lg:text-3xl cursor-pointer col-span-6 mb-8 lg:mb-0 place-self-center lg:place-self-auto lg:col-span-4">
          <a href="#">ARC</a>
        </h1>
        <div className="grid grid-cols-2 mx-auto gap-x-8 gap-y-4 lg:gap-y-0 lg:grid-cols-6 col-span-6 lg:col-span-8">
          {links.map((link, idx) => (
            <a href="#" key={idx}>
              {link}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center mt-12 lg:mt-6 text-xs">
        Copyright © 2024 ARC . All Rights Reseved.
      </p>
    </footer>
  );
};

export default Footer;
