import Bredcump from "@/app/(components)/global_containers/Bredcump";
import ServicesGroups from "@/app/(components)/global_containers/ServicesGroups";


const HomeServices = ({ data, data_translate, params }) => {
  return (
    <section className="mt-20 ">
      <div className="max-w-[1580px]  3xl:max-w-[1380px] 2xl:max-w-[1150px] 3xl:px-166 xl:px-8  m-auto lg:px-4">
        <Bredcump
          name={data_translate?.service}
          seeall={data_translate?.showmore}
          href={`${params?.code}/xidmetler`}
          longtext={data_translate?.service_1}
        />
        <ServicesGroups
          data={data}
          params={params}
          readmore={data_translate?.readmore}
          news={data_translate?.new}
        />
      </div>
    </section>
  );
};

export default HomeServices;
