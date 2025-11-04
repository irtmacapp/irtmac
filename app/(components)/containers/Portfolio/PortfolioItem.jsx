import Link from "next/link";
import { handleScrollToBottom } from "../../handleScrollToBottom/handleScrollToBottom";

const PortfolioItem = ({ id, href, title, readmore }) => {
  return (
    <Link
      key={id}
      href={href}
      onClick={handleScrollToBottom}
      className="col-span-4 lg:col-span-6 md:col-span-12 border bg-[#E7EFF7] border-[#E7EFF7] services_group  flex justify-between flex-col  "
    >
      <div className=" py-8 px-8 lg:py-4 lg:px-4 flex flex-col text-[#003B71] relative overflow-hidden top">
        <h4 className="font-medium text-2xl lg:text-lg mb-3 line-clamp-2">
          {title}
        </h4>
        <img
          src="/absolute_pic.svg"
          className="absolute top-0 right-[-100%] h-full"
          alt="absolute_pic"
        />
      </div>
      <div className="bg-[#fff] flex py-3 px-8 justify-between items-center bottom">
        <h3 className="text-[#003B71]">{readmore}</h3>
        <span>
          <img src="/readmore/readmore.svg" alt="readmore" />
        </span>
      </div>
    </Link>
  );
};

export default PortfolioItem;
