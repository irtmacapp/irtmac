import Image from "next/image";
import Link from "next/link";
import { handleScrollToBottom } from "../../handleScrollToBottom/handleScrollToBottom";
import AnimatedButton from "../../global_containers/AnimatedButton/AnimatedButton";

const NewsItem = ({ href, img, readmore, data, name, text, news_title }) => {
  return (
    <div
      onClick={handleScrollToBottom}
      className="col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-12  h-full"
    >
      <div className="flex flex-col h-full  p-[16px] bg-[#f0f6f9] rounded-[20px]">
        <Image
          width={1000}
          height={1000}
          src={img}
          alt={name}
          priority
          className="img-fluid h-[240px] rounded-[20px] "
        />
        <div className=" flex flex-col pt-[16px]  relative overflow-hidden  h-full">
          <Link
            href={href}
            className="text-[#003B71] font-['TTForsTrial-Medium'] text-[24px] line-clamp-2 leading-[100%] mb-[16px]"
          >
            {name}
          </Link>
          <div
            key={text}
            className="text-[#003B71] line-clamp-3 text-[14px] mb-[40px]"
            dangerouslySetInnerHTML={{
              __html: `${text}`,
            }}
          />
          <div className="flex justify-between items-center w-full">
            {data !== null && (
              <div className=" w-max text-[13px]  px-4 py-2 flex gap-[10px] items-center">
                <h6 className="capitalize text-[#5b748d] text-[16px]">
                  {news_title}
                </h6>
                <span className="capitalize text-[#5b748d] text-[16px]">/</span>
                <h6 className="capitalize text-[#5b748d] text-[16px]">
                  {data}
                </h6>
              </div>
            )}
            <div>
              <AnimatedButton leanmore={readmore} href={href} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
