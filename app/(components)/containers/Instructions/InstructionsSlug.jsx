import MaxWidth from "../../MaxWidth/MaxWidth";
import SharedTabs from "../../global_containers/Tabs/Tabs";

const TabContent = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>Bu bölüm üçün içerik bulunamadı.</p>;
  }

  return (
    <div className="flex flex-col border border-[#009ade] rounded-[20px] overflow-hidden col-span-12">
      {items?.map((item, index) => (
        <div
          key={item.id}
          className={`grid grid-cols-12 ${
            index !== items.length - 1 ? "border-b border-[#009ade]" : ""
          }`}
        >
          <div className="col-span-2 py-[40px] px-[40px] flex justify-center items-center bg-[#f0f6f9] border-r border-[#009ade]">
            {item?.name && <p className="text-[16px]">{item.name}</p>}
          </div>

          <div className="col-span-8 flex justify-start items-center pl-[20px] border-r border-[#009ade]">
            <div
              className="text-[16px] text-[#002d74]"
              dangerouslySetInnerHTML={{ __html: `${item?.text}` }}
            />
          </div>

          <div className="col-span-2 flex justify-center items-center">
            {item.text2 && (
              <p className="text-[16px] text-[#002d74]">{item.text2}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const InstructionsSlug = ({ data }) => {
  const tabsData = data?.alt_menu?.map((tabItem) => ({
    id: tabItem.id,
    name: tabItem.text,
    content: <TabContent items={tabItem.alt_menu} />,
  }));

  return (
    <section className="mt-[250px] mb-[80px] min-h-[60vh]">
      <MaxWidth>
        <h3 className="text-center text-[36px] text-[#002d74] font-['TTForsTrial-Bold']">
          {data?.title}
        </h3>
        <div className="mt-[40px]">
          <SharedTabs
            tabs={tabsData}
            activeColor={`text-[#fff]`}
            nonActiveColor={`text-[#002d74] border border-[#009ade]`}
            h2Class="text-[16px] md:text-[14px] py-[11px] px-[73px] md:px-[20px] md:py-[6px] rounded-[60px]"
            activeTabClass={`bg-[#009ade] rounded-[60px] text-[#002d74]`}
            customStyle={`flex items-center w-max m-auto`}
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default InstructionsSlug;
