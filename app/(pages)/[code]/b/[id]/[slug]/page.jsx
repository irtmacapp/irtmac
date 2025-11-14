import NewsSingle from "@/app/(components)/containers/News/NewsSingle";
import Footer from "@/app/(components)/layout/Footer/Index";
import Header from "@/app/(components)/layout/Header/Index";
import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";
import { Suspense } from "react";

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const data_blogs = await fetchData(
    params?.code,
    `b/${params?.id}/${params?.slug}`
  );
  return { data_footer, data_translate, data_blogs };
};

export async function generateMetadata({ params }) {
  const data = await fetchData(params?.code, `b/${params?.id}/${params?.slug}`);

  return {
    title: `Rightwellton - ${data?.blog?.name}`,
    description: data?.blog?.name,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Dinamik favicon URL-i
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: `Rightwellton - ${data?.blog?.name}`,
      description: data?.blog?.name,
      url: `${process.env.NEXT_PUBLIC_SITE_NAME}/${params?.code}/b/${params.id}`,
      siteName: "RIGHTWELLTON.AZ",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.blog?.cover}`,
          secure_url: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.blog?.cover}`,
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { data_footer, data_translate, data_blogs } = await getData(params);
  return (
    <Suspense>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <section className="pt-[50px] xl:pt-[40px] min-h-screen newsSingle mb-24 lg:pt-[30px]">
        <div className="flex items-center justify-center w-full text-center pl-[296px] pr-[296px] 2xl:px-[120px] 2xl:pl-[120px] xl:px-[30px] xl:py-[10px] md:px-[20px]  md:py-2">
          <h3 className="text-[#003B71] font-semibold text-4xl xl:text-3xl lg:text-2xl md:text-xl text-center mb-10 lg:mb-0 ">
            {data_blogs?.blog?.name}
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="flex items-start lg:flex-col  col-span-11 lg:col-span-12">
            <div className="title pl-[296px] pr-[296px] 4xl:px-[120px] 3xl:pl-[120px] xl:px-[30px] xl:py-[10px] lg:px-[20px] lg:py-[20px]">
              <div
                className="mb-5 lg:text-sm"
                dangerouslySetInnerHTML={{
                  __html: data_blogs?.blog?.text,
                }}
              ></div>
            </div>
          </div>
          <NewsSingle
            params={params}
            data={data_blogs}
            copy1={data_translate?.copy1}
            share={data_translate?.share}
            other_blogs={data_translate?.other_blogs}
            showmore={data_translate?.showmore}
            title={data_blogs?.blog?.title}
          />
        </div>
      </section>

      <Footer data={data_footer} params={params} />
    </Suspense>
  );
}
