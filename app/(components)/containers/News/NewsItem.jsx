import Image from "next/image";
import Link from "next/link";
import { handleScrollToBottom } from "../../handleScrollToBottom/handleScrollToBottom";

const NewsItem = ({ href, img, tagName, data, name, text }) => {
  return (
    <Link
      href={href}
      onClick={handleScrollToBottom}
      className="col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-12 newsgrid h-full "
    >
      <div className="flex flex-col h-full">
        <Image
          width={1000}
          height={1000}
          src={img}
          alt={name}
          priority
          className="img-fluid h-[320px] min-h-[320px] lg:h-[200px]"
        />
        <div className="bg-[#E7EFF7] flex flex-col px-10 py-10 2xl:px-5 2xl:py-5 relative overflow-hidden title_content h-full">
          <div className="flex items-center justify-between gap-4 ">
            <h5 className="bg-[#CAEEFB] text-black text-[13px] rounded-full tagname px-4 py-2 capitalize ">
              <div className="line-clamp-2">{tagName}</div>
            </h5>

            {data !== null && (
              <h3 className="border border-[#C5CEE0] rounded-full text-[13px]  px-4 py-2 ">
                {data}
              </h3>
            )}
          </div>
          <h4 className="text-[#003B71] text-2xl 2xl:text-xl font-medium mb-4 mt-6 line-clamp-2">
            {name}
          </h4>
          <div
            key={text} // text değişince yeniden mount olur
            className="text-[#003B71] line-clamp-2 h-[3em]"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />

          <img
            src="/absolute_pic.svg"
            alt="absolute_pic"
            className="absolute top-0 right-[-100%] h-full mix-blend-plus-lighter"
          />
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
