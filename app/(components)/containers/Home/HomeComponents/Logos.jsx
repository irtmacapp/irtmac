"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";
const HomeLogos = ({ data }) => {
  return (
    <section>
      <MaxWidth>
        <div className="mt-[80px] ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
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
                <SwiperSlide key={i} className="h-full ">
                  <div className=" flex items-center justify-center bg-[#F7F7FA] h-[180px] py-[38px] rounded-[20px] px-[34px]">
                    <Image
                      width={1000}
                      height={1000}
                      src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image}`}
                      alt="img"
                      className="mix-blend-darken object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeLogos;
