import Image from "next/image";
import MaxWidth from "../../MaxWidth/MaxWidth";

const Leader = ({ data }) => {
  return (
    <>
      <section className="mt-[280px] mb-[100px]">
        <MaxWidth>
          <h3 className="text-center text-[#003B71] font-semibold text-4xl xl:text-2xl mb-10">
            {data?.rehberin_muracieti?.title}
          </h3>
          <div className="flex flex-col mb-[70px] justify-center  items-center">
            <h6 className="text-[#002d74] text-[24px]">
              {data?.rehberin_muracieti?.position}
            </h6>
            <h3 className="text-[#002d74] text-[24px] font-semibold">
              {data?.rehberin_muracieti?.fullname}
            </h3>
          </div>

          <div className=" bg-[#f0f6f9] py-[60px] px-[50px] rounded-[20px] h-[350px] relative rounded-tl-[160px] rounded-bl-[160px]">
            <div className="bg-[#009ade] w-[350px] flex h-[350px] absolute top-0 left-0 rounded-full ">
              <span className="absolute bottom-[20px] left-[-4px] right-[10px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.rehberin_muracieti?.image}`}
                  alt={data?.rehberin_muracieti?.title}
                  width={330}
                  height={330}
                  className=""
                />
              </span>
            </div>
            <div className="pl-[350px] flex justify-center items-center h-full">
              <div
                className=" text-[#003B71] text-[16px]"
                dangerouslySetInnerHTML={{
                  __html: `${data?.rehberin_muracieti?.text}`,
                }}
              />
            </div>
          </div>

          <div className="mt-[60px]">
            <div
              className=" text-[#003B71] text-[16px] text-center"
              dangerouslySetInnerHTML={{
                __html: `${data?.rehberin_muracieti?.text2}`,
              }}
            />
          </div>
        </MaxWidth>
      </section>
    </>
  );
};

export default Leader;
