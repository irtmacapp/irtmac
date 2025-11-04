"use client";

import { useEffect, useState } from "react";
import BredcumPages from "../../global_containers/BredcumPages";
import NewsItem from "./NewsItem";
import Pagination from "../../global_containers/Pagination";
const News = ({ params, count1, news }) => {
  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/${params?.code}/blogs?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .finally(() => setLoading(false));

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [page]);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <section className=" mb-28 pt-10 max-w-[1580px]  2xl:max-w-[1380px] px-12  xl:max-w-[1150px]  m-auto  lg:px-4 min-h-screen ">
        <BredcumPages name={news} longtext={count1} />
        <div className="grid grid-cols-12 gap-6 pt-10">
          {blog?.data?.map((cur, i) => {
            const blogDate = cur?.created_at;
            let date = new Date(blogDate);
            let blogFullDate =
              date?.getDate() +
              "." +
              date?.getMonth() +
              "." +
              date?.getFullYear();
            return (
              <NewsItem
                id={i}
                key={i}
                href={`/${params?.code}/b/${cur?.id}/${cur?.slug}`}
                img={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.cover}`}
                tagName={cur?.tagname}
                data={blogFullDate}
                name={cur?.name}
                text={cur?.text}
              />
            );
          })}
        </div>
        {blog?.total_pages > 1 && (
          <Pagination
            totalPage={blog?.total_pages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </>
  );
};

export default News;
