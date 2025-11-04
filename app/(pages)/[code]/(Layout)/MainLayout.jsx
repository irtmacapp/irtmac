import Footer from "@/app/(components)/layout/Footer/Index";
import Header from "@/app/(components)/layout/Header/Index";


const MainLayout = ({ params, children, data_footer, data_translate }) => {
  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      {children}
      <Footer data={data_footer} params={params} />
    </>
  );
};

export default MainLayout;
