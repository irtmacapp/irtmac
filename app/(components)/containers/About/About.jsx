import MaxWidth from "../../MaxWidth/MaxWidth";
import "./bootstrap.css";

const About = ({ data }) => {
  return (
    <>
      <section className="mb-20 mt-[250px]">
        <MaxWidth>
          <div className="flex flex-col lg:px-5">
            <h3 className="text-[#002d74] text-[36px]  mb-10 font-bold text-center">
              {data?.haqqimizda?.title}
            </h3>
            <h3 className="text-[#002d74] text-[24px] mb-10 text-center">
              {data?.haqqimizda?.text2}
            </h3>
          </div>
          <div className="flex flex-wrap  justify-center ">
            {data?.meqsedler?.map((cur, i) => {
              return (
                <div
                  key={i}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-[15px] "
                >
                  <div className="p-[40px]  text-[#003B71] bg-[#f0f6f9] rounded-[20px]">
                    <div
                      className="font-semibold mb-3 text-[24px] text-[#003b71]"
                      dangerouslySetInnerHTML={{ __html: `${cur?.name1}` }}
                    />

                    <h6 className="text-[14px]">{cur?.name2}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="my-[80px] text-center text-[24px] text-[#002d74]"
            dangerouslySetInnerHTML={{ __html: `${data?.haqqimizda?.text}` }}
          />
        </MaxWidth>
      </section>
    </>
  );
};

export default About;
