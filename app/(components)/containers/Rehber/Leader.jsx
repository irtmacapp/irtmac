const Leader = ({ data }) => {
  return (
    <>
      <section className="max-w-[1580px]  2xl:max-w-[1380px] xl:max-w-[1150px] px-12   m-auto lg:px-4 pt-20 lg:pt-10 mb-20 min-h-screen">
        <h3 className="text-center text-[#003B71] font-semibold text-4xl xl:text-2xl mb-10">
          {data?.rehberin_muracieti?.title}
        </h3>
        <div className="grid grid-cols-12 ">
          <div className="col-span-8 lg:col-span-12 bg-[#E7EFF7] relative z-30 overflow-hidden min-h-[669px] lg:min-h-0">
            <img
              src="/absolute_pic.svg"
              className="absolute top-16 right-0 h-[550px] 2xl:top-28 md:hidden "
              alt="absolute_pic"
            />
            <div className="flex flex-col p-16 lg:p-6">
              <div className="flex justify-start items-start pb-8">
                <img
                  src="/beck.svg"
                  className="img-fluid !w-[58px] h-[43px] !object-contain lg:w-[30px] lg:h-[20px]"
                  alt="beck"
                />
              </div>

              <div
                className="w-[80%] lg:w-full text-[#003B71] text-sm mb-8"
                dangerouslySetInnerHTML={{
                  __html: data?.rehberin_muracieti?.text,
                }}
              />
              <h3 className="text-[#003B71] font-semibold mb-2">
                {data?.rehberin_muracieti?.fullname}
              </h3>
              <h6 className="text-[#5B748D]">
                {data?.rehberin_muracieti?.text?.position}
              </h6>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-12   flex items-center justify-center h-full">
            <div className="bg-[#003B71] flex items-center justify-center   w-full ml-[-60px] lg:ml-0 z-[50]  relative min-h-[541px] lg:min-h-0">
              <img
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.rehberin_muracieti?.image}`}
                alt={data?.rehberin_muracieti?.title}
                className="img-fluid h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leader;
