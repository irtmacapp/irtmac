"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import Pagination from "../../global_containers/Pagination";

const Portfolio = ({ data_cat, portfolio, params, readmore }) => {
  const [category, setCategory] = useState(data_cat);
  const [alldata, setData] = useState([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCategory(data_cat);
    if (category?.categories?.length > 0) {
      setSelectedCategoryId(category?.categories[0]?.id);
    }
  }, []);

  useEffect(() => {
    if (selectedCategoryId !== null) {
      fetch(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/${params}/portfolio/${selectedCategoryId}?page=${page}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [selectedCategoryId, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <section className="pt-16 min-h-[71vh] mb-20 lg:pt-10 max-w-[1580px]  2xl:max-w-[1380px] xl:max-w-[1150px] m-auto lg:px-4">
        <h3 className="text-[#003B71] font-bold text-4xl mb-12 lg:mb-4 text-center capitalize">
          {portfolio}
        </h3>
        <Tabs
          className="lg:px-4"
          onChange={(index) =>
            setSelectedCategoryId(category?.categories?.[index]?.id)
          }
        >
          <TabList className="flex justify-center lg:flex-col  flex-wrap items-center mb-10 gap-6 ">
            {category &&
              category?.categories?.map((cur, i) => (
                <Tab
                  key={i}
                  className="py-3 px-14 lg:px-8 lg:py-2 border lg:w-full border-[#003B71] transition-all"
                  _selected={{ color: "white", bg: "#003B71" }}
                >
                  {cur?.title}
                </Tab>
              ))}
          </TabList>

          <TabPanels>
            {category?.categories?.map(() => (
              <TabPanel>
                <div className="grid grid-cols-12 gap-6 px-12 lg:px-4 md:px-0">
                  {alldata?.portfolios
                    ?.filter((item) => item?.category_id === selectedCategoryId)
                    ?.map((item) => {
                      return (
                        <PortfolioItem
                          id={item?.id}
                          href={`/${params}/p/${item?.id}`}
                          title={item?.title}
                          readmore={readmore}
                        />
                      );
                    })}
                </div>
                {alldata?.total_pages > 1 && (
                  <Pagination
                    totalPage={alldata?.total_pages}
                    currentPage={page}
                    onPageChange={handlePageChange}
                  />
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default Portfolio;
