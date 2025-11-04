import Bredcump from "../../global_containers/Bredcump";
import PortfolioItem from "./PortfolioItem";

const PortfolioSingle = ({
  params,
  data,
  problem_1,
  problem_2,
  portfolio_1,
  portfolio_2,
  portfolio_3,
  portfolio_4,
  portfolio_5,
  portfolio_6,
  portfolio_7,
  showmore,
  otherWorks,
  readmore,
}) => {
  return (
    <section className=" pt-20 lg:pt-6 min-h-screen mb-20 max-w-[1580px] px-12  2xl:max-w-[1380px] xl:max-w-[1150px]  m-auto  lg:px-4 ">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 lg:col-span-12 ">
          <div className="flex flex-col">
            <h3 className="text-[#003B71] text-3xl pb-6 font-semibold lg:text-xl md:text-lg">
              {problem_1}
            </h3>
            <div
              className="lg:text-sm"
              dangerouslySetInnerHTML={{
                __html: data?.portfolio?.problemin_tesviri,
              }}
            ></div>
          </div>
          <div className="flex flex-col mt-10">
            <h3 className="text-[#003B71] text-3xl pb-6 font-semibold lg:text-xl md:text-lg">
              {problem_2}
            </h3>
            <div
              className="lg:text-sm"
              dangerouslySetInnerHTML={{
                __html: data?.portfolio?.nece_hell_etdik,
              }}
            ></div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-12 ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 xl:col-span-6 lg:col-span-12 px-6 py-6 border border-[#E1251B] text-[#003B71] flex flex-col justify-between h-full">
              <h6 className="font-medium mb-3 text-xl">{portfolio_1}</h6>
              <p className="text-[#E1251B] font-semibold text-2xl lg:text-xl md:text-lg ">
                {data?.portfolio?.ise_celb_olunanlar}
              </p>
            </div>
            <div className="col-span-4 xl:col-span-6 lg:col-span-12 px-6 py-6 border border-[#E1251B] text-[#003B71] flex flex-col justify-between h-full">
              <h6 className="font-medium mb-3 text-xl">{portfolio_2}</h6>
              <p className="text-[#E1251B] font-semibold text-2xl lg:text-xl md:text-lg ">
                {data?.portfolio?.prosesin_muddeti}
              </p>
            </div>
            <div className="col-span-4 xl:col-span-6 lg:col-span-12 px-6 py-6 border border-[#E1251B] text-[#003B71] flex flex-col justify-between h-full">
              <h6 className="font-medium mb-3 text-xl">{portfolio_3}</h6>
              <p className="text-[#E1251B] font-semibold text-2xl lg:text-xl md:text-lg ">
                {data?.portfolio?.cetinlik_seviyesi}
              </p>
            </div>
            <div className="col-span-4 xl:col-span-6 lg:col-span-12 px-6 py-6 border border-[#E1251B] text-[#003B71] flex flex-col justify-between h-full">
              <h6 className="font-medium mb-3 text-xl">{portfolio_4}</h6>
              <p className="text-[#E1251B] font-semibold text-2xl lg:text-xl md:text-lg ">
                {data?.portfolio?.instansiya}
              </p>
            </div>
            <div className="col-span-4 xl:col-span-6 lg:col-span-12 px-6 py-6 border border-[#E1251B] text-[#003B71] flex flex-col justify-between h-full">
              <h6 className="font-medium mb-3 text-xl">{portfolio_5}</h6>
              <p className="text-[#E1251B] font-semibold text-2xl lg:text-xl md:text-lg ">
                {data?.portfolio?.mehkeme}
              </p>
            </div>
            <div className="col-span-4 xl:col-span-6 lg:col-span-12 px-6 py-6 border border-[#E1251B] text-[#003B71] flex flex-col justify-between h-full">
              <h6 className="font-medium mb-3 text-xl">{portfolio_6}</h6>
              <p className="text-[#E1251B] font-semibold text-2xl lg:text-xl md:text-lg ">
                {data?.portfolio?.goruslerin_sayi}
              </p>
            </div>
            <div className="col-span-4 xl:col-span-6 lg:col-span-12 px-6 py-6 border border-[#E1251B] text-[#003B71] flex flex-col justify-between h-full">
              <h6 className="font-medium mb-3 text-xl">{portfolio_7}</h6>
              <p className="text-[#E1251B] font-semibold text-2xl lg:text-xl md:text-lg ">
                {data?.portfolio?.senedlesme}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-20">
        <div className="mb-5">
          <Bredcump
            name={otherWorks}
            longtext=""
            seeall={showmore}
            href={`/${params?.code}/portfolio`}
          />
        </div>

        <div className="grid grid-cols-12 gap-6">
          {data?.randomportfolio &&
            data?.randomportfolio?.map((item, i) => {
              return (
                <PortfolioItem
                  id={i}
                  key={i}
                  href={`/${params?.code}/p/${item?.id}`}
                  title={item?.title}
                  readmore={readmore}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSingle;
