import Link from "next/link";
import { handleScrollToBottom } from "../../handleScrollToBottom/handleScrollToBottom";

const ServiceItem = ({ id, href, title, desc, newService, readmore, news }) => {
  return (
    <Link
      key={id}
      href={href}
      onClick={handleScrollToBottom}
      className="col-span-4 lg:col-span-6 md:col-span-12 border border-[#E7EFF7] bg-[#E7EFF7] services_group relative h-full flex  justify-between flex-col"
    >
      {newService !== 0 && (
        <div className="absolute top-[-2px] right-5 z-10 text-white  uppercase font-bold px-2 py-4 clip_path">
          <div className="rotate-[90deg]">{news}</div>
        </div>
      )}
      <div className=" py-8 px-8 lg:py-4 lg:px-4 flex flex-col text-[#003B71] relative overflow-hidden top">
        <h4 className="font-medium text-2xl lg:text-xl mb-3">{title}</h4>
        <div className="lg:text-sm line-clamp-3">{desc}</div>
        <img
          src="/absolute_pic.svg"
          className="absolute top-0 right-[-100%] h-full"
          alt="absolute_pic"
        />
      </div>
      <div className="bg-[#fff] flex  py-3 px-8 justify-between items-center bottom ">
        <h3 className=" text-[#003B71]">{readmore}</h3>
        <img src="/readmore/readmore.svg" alt="readmore" />
      </div>
    </Link>
  );
};

export default ServiceItem;
