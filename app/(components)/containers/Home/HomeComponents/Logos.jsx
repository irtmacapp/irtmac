"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
const HomeLogos = ({ data }) => {
  return (
    <div className="mt-[80px] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data &&
          data?.map((cur, i) => (
            <SwiperSlide key={i} className="">
              <div className=" flex items-center justify-center bg-[#F7F7FA]">
                <Image
                  width={1000}
                  height={1000}
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image}`}
                  alt="img"
                  className="img-fluid !h-[100px] !object-contain px-6 py-6 mix-blend-darken"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HomeLogos;
