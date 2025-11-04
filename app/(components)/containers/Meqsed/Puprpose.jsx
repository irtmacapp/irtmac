import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Puprpose = ({ data, meqsedimiz, deyerimiz }) => {
  return (
    <>
      <section className="pt-16 min-h-[75vh] mb-16 lg:pt-12  max-w-[1580px]  2xl:max-w-[1380px] px-12 xl:max-w-[1150px]  m-auto  lg:px-4">
        <Tabs>
          <TabList className=" flex justify-center flex-wrap items-center mb-10 gap-6">
            <Tab
              className="py-3 px-14 border border-[#003B71] transition-all"
              _selected={{ color: "white", bg: "#003B71" }}
            >
              {meqsedimiz}
            </Tab>
            <Tab
              className="py-3 px-14  border border-[#003B71] transition-all"
              _selected={{ color: "white", bg: "#003B71" }}
            >
              {deyerimiz}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="">
              <div className="grid grid-cols-12 gap-6">
                {data?.meqsedler?.map((cur, i) => (
                  <div key={i} className="col-span-6 lg:col-span-12">
                    <div className="bg-[#E7EFF7] p-8 lg:p-6 flex flex-col">
                      <h3 className="text-[#003B71] text-2xl mb-3">
                        {cur?.name1}
                      </h3>
                      <p className="text-[#003B71] text-lg lg:text-sm ">
                        {cur?.name2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="grid grid-cols-12 gap-6 ">
                {data?.deyerler?.map((cur, i) => (
                  <div key={i} className="col-span-6 lg:col-span-12 ">
                    <div className="bg-[#E7EFF7] p-8 lg:p-6 flex flex-col h-full">
                      <h3 className="text-[#003B71] text-2xl mb-3">
                        {cur?.name1}
                      </h3>
                      <p className="text-[#003B71] text-lg lg:text-sm ">
                        {cur?.name2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default Puprpose;
