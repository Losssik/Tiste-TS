import { FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" flex justify-center items-center gap-10 py-4 text-xs">
      <p>all rights reserved - {year} ©</p>
      <div className=" flex justify-center items-center gap-2 italic">
        <div>
          <FaRegEnvelope />
        </div>
        <p>
          <a href="mailto:przemek.bialkwno@gmail.com">
            przemek.bialkwno@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
