
const About = ({ data }) => {
  return (
    <>
      <section className="mb-20 pt-10 min-h-screen">
        <div className="container m-auto">
          <div className="flex flex-col lg:px-5">
            <h3 className="text-[#003B71] text-3xl mb-10 font-bold text-center">
              {data?.haqqimizda?.title}
            </h3>
            <div
              className="text-[#003B71] mb-4 lg:text-sm"
              dangerouslySetInnerHTML={{
                __html: data?.haqqimizda?.text,
              }}
            ></div>
          </div>
        </div>
        <div className="max-w-[1580px]  3xl:max-w-[1380px]  xl:max-w-[1150px]  m-auto lg:px-4 px-12 xl:px-6 ">
          <div className="grid grid-cols-12 gap-4 pt-20">
            {data?.sirkettarixi?.map((cur, i) => {
              return (
                <div
                  key={i}
                  className="col-span-3 lg:col-span-6 md:col-span-12 px-6 py-6 border border-[#003B71] text-[#003B71] bg-[#E7EFF7]"
                >
                  <h6 className="font-semibold mb-3 text-xl text-[#E1251B]">
                    {cur?.year}
                  </h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cur?.description,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
