"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Navigation } from "swiper/modules";

import { FaFacebook, FaLinkedinIn, FaLink } from "react-icons/fa";

import { FacebookShareButton, LinkedinShareButton } from "react-share";
import Swal from "sweetalert2";


import { useRef } from "react";
import { Image } from "lightbox.js-react";
import Bredcump from "../../global_containers/Bredcump";
import NewsItem from "./NewsItem";

const NewsSingle = ({
  params,
  title,
  data,
  copy1,
  share,
  other_blogs,
  showmore,
}) => {
  const swiperRef = useRef();
  const href = `${process.env.NEXT_PUBLIC_SITE_NAME}/${params?.code}/b/${params?.id}/${params?.slug}`;

  const copyEmail = () => {
    const emailElement = window?.location?.href;
    if (emailElement) {
      const href = emailElement;
      if (navigator.clipboard && href) {
        navigator.clipboard
          .writeText(href)
          .then(() => {
            Swal.fire(`${copy1} `, `${href}`, "success");
          })
          .catch((err) => {
            console.error("Error:", err);
          });
      }
    }
  };

  return (
    <>
      <div className="col-span-1 lg:col-span-12 lg:mx-[20px] lg:mb-4">
        <div className=" border border-[#C5CEE0] lg:w-full  z-30 bg-white mr-7 p-4 lg:mr-0  w-max">
          <h4 className="text-black font-medium text-lg mb-6 lg:text-sm">
            {share}
          </h4>
          <ul className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-around items-center lg:w-full">
            <li className="bg-[#003B71] rounded-full p-[10px] lg:p-[8px] mb-4 cursor-pointer lg:mb-0 flex justify-center items-center">
              <FacebookShareButton
                url={href}
                title={title}
                quote={title}
                description={title}
              >
                <FaFacebook className="text-2xl lg:text-xl  text-white" />
              </FacebookShareButton>
            </li>

            <li className="bg-[#003B71] rounded-full p-[10px] lg:p-[8px] mb-4 cursor-pointer lg:mb-0 flex justify-center items-center">
              <LinkedinShareButton
                url={href}
                title={title}
                quote={title}
                description={title}
              >
                <FaLinkedinIn className="text-2xl lg:text-xl  text-white" />
              </LinkedinShareButton>
            </li>
            <li
              className="bg-[#003B71] rounded-full p-[10px] lg:p-[8px] cursor-pointer lg:mb-0"
              onClick={copyEmail}
            >
              <FaLink className="text-2xl lg:text-xl  text-white" />
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-12">
        <div className="max-w-[1580px]  3xl:max-w-[1380px] 2xl:max-w-[1150px] xl:max-w-[1000px]  m-auto  lg:px-4">
          {data?.galleries > 0 && (
            <div className="mt-10">
              <Swiper
                slidesPerView={1}
                initialSlide={1}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper relative"
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {data?.galleries &&
                  data?.galleries?.map((cur, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.name}`}
                          className="img-fluid h-[460px] lg:h-[250px]"
                          alt="img"
                          width={1000}
                          height={460}
                          priority
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          )}

          <div className="mt-20">
            <Bredcump
              name={other_blogs}
              href={`/${params?.code}/blog`}
              seeall={showmore}
            />
          </div>
          <div className="grid grid-cols-12 gap-6 pt-10">
            {data?.randomBlogs &&
              data?.randomBlogs?.map((cur, i) => {
                const blogDate = cur?.created_at;
                let date = new Date(blogDate);
                let blogFullDate =
                  date?.getDate() +
                  "." +
                  date?.getMonth() +
                  "." +
                  date?.getFullYear();
                return (
                  <div
                    key={i}
                    className="col-span-4 lg:col-span-6 md:col-span-12 newsgrid "
                  >
                    <NewsItem
                      id={i}
                      href={`/${params?.code}/b/${cur?.id}/${cur?.slug}`}
                      img={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.cover}`}
                      tagName={cur?.tagname}
                      data={blogFullDate}
                      name={cur?.name}
                      text={cur?.text}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSingle;
