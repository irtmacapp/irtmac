import Image from "next/image";

const FirstComponent = ({ data }) => {
  return (
    <section>
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          priority 
          className="img-fluid h-[700px] 2xl:h-[500px] lg:h-[300px]"
          src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
          alt={data?.created_at}
        />
        <div className="title absolute top-36 left-[50%] lg:top-16 translate-x-[-50%] translate-y-[-50%]">
          <div
            className="text-white  text-6xl font-bold 2xl:text-5xl lg:text-2xl text-center text-slider"
            dangerouslySetInnerHTML={{
              __html: data?.title,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;
