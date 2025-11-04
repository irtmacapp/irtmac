import Bredcump from "@/app/(components)/global_containers/Bredcump";
import NewsGrid from "./NewsGrid";


const HomeNews = ({ data, blog, params, showmore, count1 }) => {
  return (
    <section className="max-w-[1580px]  2xl:max-w-[1380px] xl:max-w-[1150px] 3xl:px-16  xl:px-8  m-auto mt-10 lg:px-4 ">
      <Bredcump
        name={blog}
        href={`/${params?.code}/blog`}
        seeall={showmore}
        longtext={count1}
      />
      <NewsGrid data={data} params={params} />
    </section>
  );
};

export default HomeNews;
