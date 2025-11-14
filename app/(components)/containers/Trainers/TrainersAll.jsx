import TrainersData from "../../global_containers/TrainersData/TrainersData";
import MaxWidth from "../../MaxWidth/MaxWidth";

const TrainersAll = ({ trainers_short, trainers_long, data, params }) => {
  return (
    <section className="mt-[250px] min-h-[60vh] mb-[100px]">
      <MaxWidth>
        <h3 className="text-center text-[36px] text-[#002d74] font-['TTForsTrial-Bold'] mb-[24px]">
          {trainers_short}
        </h3>
        <div className="text-center  flex items-center justify-center">
          <p className="text-center text-[24px] text-[#002d74] w-[80%]">
            {trainers_long}
          </p>
        </div>

        <div className="mt-[40px] grid grid-cols-12 gap-[24px]">
          {data &&
            data?.map((cur) => (
              <TrainersData key={cur?.id} cur={cur} params={params} />
            ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default TrainersAll;
