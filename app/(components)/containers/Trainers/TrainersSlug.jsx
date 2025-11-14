import React from "react";
import MaxWidth from "../../MaxWidth/MaxWidth";
import Image from "next/image";

const TrainersSlug = ({ data }) => {
  return (
    <section className="mt-[280px] mb-[100px] min-h-[60vh]">
      <MaxWidth>
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-3">
            <Image
              width={330}
              height={374}
              alt={data?.name_vr}
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
            />
          </div>
          <div className="col-span-9">
            <h3 className="text-[36px] text-[#002d74] font-['TTForsTrial-Bold'] mb-[24px]">
              {data?.name_vr}
            </h3>
            <p className="text-[24px] text-[#002d74] w-[80%]">
              {data?.position_vr}
            </p>
          </div>
        </div>
        <div className="mt-[60px] flex items-center justify-center text-center">
          <div
            className="text-[24px] text-[#002d74]"
            dangerouslySetInnerHTML={{ __html: `${data?.text2}` }}
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default TrainersSlug;
