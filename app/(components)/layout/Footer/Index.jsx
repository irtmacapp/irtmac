import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = ({ data, params }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#003B71] flex items-center justify-between w-full px-8 py-8 relative overflow-hidden lg:flex-col-reverse lg:gap-4 ">
      <div className="left ">
        <p className="text-[#C5CEE0] md:text-sm lg:text-center lg:relative lg:z-50">
          <Link href={`/${params?.code}`}>Rightwellton</Link> {year}
        </p>
      </div>
      <p className="absolute top-[-150%] left-[50%]  translate-x-[-50%]">
        <img src="/footer_simvol.svg" className="w-[400px]" alt="footer_simvol" />
      </p>
      <div className="right  z-30">
        <ul className="flex items-center gap-4 text-white">
          <li className="border-[1px] border-white  text-xl ">
            <Link
              target="_blank"
              href={`${data?.settings?.facebook}`}
              className="block w-full p-2"
            >
              <FaFacebook />
            </Link>
          </li>
          <li className="border-[1px] border-white  text-xl">
            <Link
              target="_blank"
              href={`${data?.settings?.instagram}`}
              className="block w-full p-2"
            >
              <FaInstagram />
            </Link>
          </li>
          <li className="border-[1px] border-white  text-xl">
            <Link
              target="_blank"
              href={`${data?.settings?.instagram}`}
              className="block w-full p-2"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="border-[1px] border-white text-xl">
            <Link
              target="_blank"
              href={`${data?.settings?.youtube}`}
              className="block w-full p-2"
            >
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
