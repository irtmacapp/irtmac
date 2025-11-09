import React from "react";
import MaxWidth from "../../MaxWidth/MaxWidth";
import Image from "next/image";
import SwiperSlider from "./SwiperSlider";

const Customers = ({ customers, customers_text, customers_long }) => {
  return (
    <section className=" my-[80px]">
      <div className="bg-[#f0f6f9] py-[40px] relative">
        <span className="absolute -top-[50px] left-[260px] bg-[#f32735] flex justify-center items-center rounded-full p-[32px]">
          <Image width={35} height={30} alt="vergul" src={"/vergul.svg"} />
        </span>
        <MaxWidth>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[36px] text-[#002d74] font-['TTForsTrial-Medium'] mb-[24px]">
              {customers_text}
            </h3>
            <p className="text-[#002d74] text-[14px] text-center max-w-7xl">
              {customers_long}
            </p>
          </div>
          <div className="mt-[40px]">
            <SwiperSlider customers={customers} />
          </div>
        </MaxWidth>
      </div>
    </section>
  );
};

export default Customers;
