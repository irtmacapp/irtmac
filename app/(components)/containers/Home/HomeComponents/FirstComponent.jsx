import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";

const FirstComponent = ({ data }) => {
  return (
    <section className="rounded-br-[30px] rounded-bl-[30px]">
      <MaxWidth>
        <div className="relative">
          <img
            width={100000}
            height={10000}
            className="img-fluid h-[700px] 2xl:h-[500px] lg:h-[300px] rounded-br-[30px] rounded-bl-[30px]"
            src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
            alt={data?.created_at}
          />
          <div className="title absolute top-[50%] right-[117px] translate-y-[-50%]">
            <div
              className="text-white text-right text-[60px] leading-[120%] text-slider font-['TTForsTrial-Bold']"
              dangerouslySetInnerHTML={{
                __html: `${data?.title}`,
              }}
            ></div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default FirstComponent;
