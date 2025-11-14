import ServiceSingle from "@/app/(components)/containers/Xidmetler/ServiceSingle";
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
  const data_xidmet = await fetchData(params?.code, `x/${params?.id}`);
  return { data_footer, data_translate, data_xidmet };
};

export async function generateMetadata({ params }) {
  const data = await fetchData(params?.code, `x/${params?.id}`);
  return {
    title: `RIGHTWELLTON - ${data?.xidmet?.title}`,
    description: data?.xidmet?.text,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Dinamik favicon URL-i
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: data?.xidmet?.name,
      description: data?.xidmet?.meta_descrtextiption,
      url: `/logo.png`,
      siteName: "RIGHTWELLTON.AZ",
      images: [
        {
          url: `/logo.png`,
          secure_url: `/logo.png`,
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { data_footer, data_translate, data_xidmet } = await getData(params);
  return (
    <Suspense>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <ServiceSingle
        params={params}
        data={data_xidmet}
        otherServices={data_translate?.other_services}
        showmore={data_translate?.showmore}
        readmore={data_translate?.readmore}
      />
      <Footer data={data_footer} params={params} />
    </Suspense>
  );
}
