import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

import { Suspense } from "react";
import Header from "@/app/(components)/layout/Header/Index";
import About from "@/app/(components)/containers/About/About";
import Footer from "@/app/(components)/layout/Footer/Index";

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const data_about = await fetchData(params?.code, "about-company");
  return { data_footer, data_translate, data_about };
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
  const { data_footer, data_translate, data_about } = await getData(params);

  return (
    <Suspense>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <About data={data_about} />
      <Footer data={data_footer} params={params} />
    </Suspense>
  );
}
