import Puprpose from "@/app/(components)/containers/Meqsed/Puprpose";
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
  const data_meqsed = await fetchData(params?.code, "meqsed_deyerler");
  return { data_footer, data_translate, data_meqsed };
};

export async function generateMetadata({ params }) {
  const data = await fetchFooterSettings(params?.code);
  return {
    title: data?.settings?.title,
    description: data?.settings?.description,
    icons: {
      icon: "/fav.png", // Dinamik favicon URL-i
      apple: "/fav.png", // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: data?.settings?.title,
      description: data?.settings?.meta_description,
      url: "https://rightwellton.az/",
      siteName: "RIGHTWELLTON.AZ",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.logo}`,
          secure_url: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.logo}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { data_footer, data_translate, data_meqsed } = await getData(params);
  return (
    <Suspense>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <Puprpose
        params={params}
        data={data_meqsed}
        meqsedimiz={data_translate?.meqsedimiz}
        deyerimiz={data_translate?.deyerimiz}
      />
      <Footer data={data_footer} params={params} />
    </Suspense>
  );
}
