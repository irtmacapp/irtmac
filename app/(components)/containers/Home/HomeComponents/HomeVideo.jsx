"use client";
import ManualModal from "@/app/(components)/global_containers/ManualModal/ManualModal";
import { useVideoModal } from "@/app/(components)/global_containers/ManualModal/useVideoModal";

import Image from "next/image";

const HomeVideo = ({ data }) => {
  const { isModalOpen, handleCloseModal, currentVideoUrl, containerRef } =
    useVideoModal();
  return (
    <section ref={containerRef} className="mt-20">
      <div className="grid grid-cols-12">
        <div className="col-span-6 lg:col-span-12 bg-[#E1251B] relative pt-16 pl-16 pr-36 3xl:pl-10 3xl:pt-10 xl:pb-11 lg:pr-10">
          <div className="flex flex-col text-white font-normal">
            <h3 className="text-4xl 2xl:text-3xl w-[60%] 2xl:w-full">
              {data?.title}
            </h3>
            <p className="pt-6">{data?.text}</p>
          </div>
          <div className="absolute right-[0px] top-0 w-full h-full object-cover">
            <Image
              src="/absolute_pic.svg"
              alt={data?.text}
              width={1000}
              height={1000}
              priority
              className=" h-full w-full mix-blend-plus-lighter "
            />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-12">
          <div className="relative h-full">
            <Image
              width={1000}
              height={1000}
              priority
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
              alt={data?.title}
              className="img-fluid h-[500px] xl:h-[300px]"
            />
            <span
              data-videolink={data?.videolink}
              className="absolute play-button top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white  flex items-center justify-center p-2 cursor-pointer"
            >
              <img src="/play-circle.svg" alt={data?.title} />
            </span>
          </div>
        </div>
      </div>
      <ManualModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={currentVideoUrl}
      />
    </section>
  );
};

export default HomeVideo;
