"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import Pagination from "../../global_containers/Pagination";
import MaxWidth from "../../MaxWidth/MaxWidth";
import { toSlug } from "../../global_containers/Convert";

const Portfolio = ({ data_cat, portfolio, params, readmore, media_long }) => {
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
      <section className="mt-[250px] mb-[100px] min-h-[65vh]">
        <MaxWidth>
          <h3 className="text-[#003B71] font-bold text-[36px] mb-[10px] lg:mb-4 text-center capitalize">
            {portfolio}
          </h3>
          <h3 className="text-[#003B71] text-[24px] mb-12 lg:mb-4 text-center w-[60%] m-auto">
            {media_long}
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
                    className="py-[10px] px-[34px] text-[16px] border lg:w-full rounded-[60px] border-[#009ade] transition-all"
                    _selected={{ color: "white", bg: "#009ade" }}
                  >
                    {cur?.title}
                  </Tab>
                ))}
            </TabList>

            <TabPanels>
              {category?.categories?.map((cur, i) => (
                <TabPanel key={cur?.id || i}>
                  <div className="grid grid-cols-12 gap-[24px]">
                    {alldata?.portfolios
                      ?.filter(
                        (item) => item?.category_id === selectedCategoryId
                      )
                      ?.map((item, i) => {
                        const slug = toSlug(item?.title);
                        return (
                          <PortfolioItem
                            key={item?.id || i}
                            id={item?.id}
                            href={`/${params}/media-merkezi/${item?.id}/${slug}`}
                            title={item?.title}
                            img={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
                            readmore={readmore}
                            tag={item?.tag}
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
        </MaxWidth>
      </section>
    </>
  );
};

export default Portfolio;
