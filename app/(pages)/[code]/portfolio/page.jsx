import Portfolio from "@/app/(components)/containers/Portfolio/Portfolio";
import Footer from "@/app/(components)/layout/Footer/Index";
import Header from "@/app/(components)/layout/Header/Index";
import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const data_kateqoriya = await fetchData(
    params?.code,
    `portfolio-kateqoriyalari`
  );
  return { data_footer, data_translate, data_kateqoriya };
};

export async function generateMetadata({ params }) {
  const data = await fetchFooterSettings(params?.code);
  return {
    title: data?.settings?.title,
    description: data?.settings?.description,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Dinamik favicon URL-i
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Əgər apple-touch-icon da eynidirsə
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
  const { data_footer, data_translate, data_kateqoriya } = await getData(
    params
  );
  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <Portfolio
        data_cat={data_kateqoriya}
        portfolio={data_translate?.portfolio}
        params={params?.code}
        readmore={data_translate?.readmore}
      />
      <Footer data={data_footer} params={params} />
    </>
  );
}
