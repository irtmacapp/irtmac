import ServiceItem from "../containers/Xidmetler/ServiceItem";

const ServicesGroups = ({ data, params, readmore, news }) => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-10">
      {data &&
        data?.map((cur, i) => {
          return (
            <ServiceItem
              id={i}
              key={i}
              href={`/${params?.code}/x/${cur?.id}`}
              title={cur.title}
              newService={cur?.new}
              desc={cur?.short_desc}
              readmore={readmore}
              news={news}
            />
          );
        })}
    </div>
  );
};

export default ServicesGroups;
