

const Counters = ({ data }) => {
  return (
    <section>
      <div className="flex flex-col mt-20">
        <div className="flex flex-col text-center items-center">
          <h3 className="mb-6 font-normal  text-3xl 2xl:text-2xl  text-[#003B71]">
            {
              data?.title
            }
          </h3>
          <p className="text-[#003B71] w-[50%] lg:w-full">
            {
              data?.text
            }
          </p>
        </div>
        <div className="counts mt-10">
          <ul className="flex items-center justify-around flex-wrap md:grid md:grid-cols-12 md:gap-2">
            <li className="flex flex-col items-center justify-center border-r border-[#C5CEE0] pr-28 lg:pr-10 md:pr-0 lg:mb-4 md:col-span-6">
              <p className="flex items-center text-[#E1251B] font-bold text-6xl 2xl:text-5xl  pb-4 md:text-3xl">
                {data?.stat1}
              </p>
              <span className="text-[#003B71]">
                {
                  data?.name1
                }
              </span>
            </li>
            <li className="flex flex-col items-center justify-center border-r border-[#C5CEE0] pr-28 lg:pr-10 md:pr-0 lg:mb-4 md:col-span-6 md:border-r-0">
              <p className="flex items-center text-[#E1251B] font-bold text-6xl 2xl:text-5xl pb-4  md:text-3xl">
                {data?.stat2}
              </p>
              <span className="text-[#003B71]">
                {
                  data?.name2
                }
              </span>
            </li>
            <li className="flex flex-col items-center justify-center border-r border-[#C5CEE0] pr-28 lg:pr-1 md:pr-0 lg:mb-4 md:col-span-6">
              <p className="flex items-center text-[#E1251B] font-bold text-6xl 2xl:text-5xl pb-4  md:text-3xl">
                {data?.stat3}
              </p>
              <span className="text-[#003B71]">
                {
                  data?.name3
                }
              </span>
            </li>
            <li className="flex flex-col items-center justify-center  pr-14 lg:mb-4 md:pr-0 md:col-span-6">
              <p className="flex items-center text-[#E1251B] font-bold text-6xl 2xl:text-5xl pb-4  md:text-3xl">
                {data?.stat4}
              </p>
              <span className="text-[#003B71]">
                {
                  data?.name4
                }
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Counters;
