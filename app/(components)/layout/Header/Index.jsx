"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import Lang from "./Lang";
import Search from "../../global_containers/Search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
const Header = ({ params, data_translate }) => {
  const [scrolledFromTop, setScrollTop] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  const mobileRef = useRef();
  const searchParams = useSearchParams();
  const overlayDiv = useRef();
  const serachComponent = useRef();
  const searchInputRef = useRef();
  const [searchInput, setSearchInput] = useState("");
  const [openCategory, setOpenCategory] = useState(null);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const activePage = usePathname();

  const mobileHeader = [
    {
      id: 1,
      title: `${data_translate?.header_1_text}`,
      href: `${params?.code}`,
      subMenu: null,
    },
    {
      id: 2,
      title: `${data_translate?.header_2_text}`,
      href: null,
      subMenu: [
        {
          id: 1,
          title: `${data_translate?.header_3_text}`,
          href: `haqqimizda`,
        },
        {
          id: 2,
          title: `${data_translate?.header_4_text}`,
          href: `meqsed`,
        },
        {
          id: 3,
          title: `${data_translate?.header_5_text}`,
          href: `rehber`,
        },
        {
          id: 4,
          title: `${data_translate?.header_6_text}`,
          href: `sertifikatlar`,
        },
        {
          id: 5,
          title: `${data_translate?.header_7_text}`,
          href: `tovsiye`,
        },
        {
          id: 6,
          title: `${data_translate?.header_8_text}`,
          href: `faq`,
        },
      ],
    },
    {
      id: 3,
      title: `${data_translate?.header_9_text}`,
      href: `${params?.code}/xidmetler`,
      subMenu: null,
    },
    {
      id: 4,
      title: `${data_translate?.header_10_text}`,
      href: `${params?.code}/portfolio`,
      subMenu: null,
    },
    {
      id: 5,
      title: `${data_translate?.header_11_text}`,
      href: null,
      subMenu: [
        {
          id: 1,
          title: `${data_translate?.header_12_text}`,
          href: `kiv`,
        },
        {
          id: 2,
          title: `${data_translate?.header_13_text}`,
          href: `blog`,
        },
      ],
    },
    {
      id: 6,
      subMenu: null,
      title: `${data_translate?.header_14_text}`,
      href: `${params?.code}/elaqe`,
    },
  ];
  const handleOpen = (name) => () => {
    setOpenCategory((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    if (searchInput && searchInput.trim() !== "") {
      setLoading(true);
      const delay = setTimeout(() => {
        fetch(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/${params?.code}/search?q=${searchInput}`
        )
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data?.blogs);
            setPortfolio(data?.portfolios);
            setServices(data?.services);
          })
          .finally(() => setLoading(false));
      }, 1000);

      return () => clearTimeout(delay);
    } else {
      setLoading(false);
      setPortfolio([]);
      setServices([]);
      setBlogs([]);
    }
  }, [searchInput]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return function () {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);
  function scrollHandler(event) {
    if (typeof window !== "undefined") {
      window.pageYOffset >= 50 ? setScrollTop(true) : setScrollTop(false);
    }
  }

  function openSearch() {
    const serach = serachComponent?.current?.classList;
    if (serach.contains("top-[-100%]")) {
      serach?.replace("top-[-100%]", "top-0");
      overlayDiv?.current?.classList?.add("active");
    }
    searchInputRef.current.focus();

    setSearchInput("");
  }

  function closeSearch() {
    const serach = serachComponent?.current?.classList;
    if (serach.contains("top-0")) {
      serach?.replace("top-0", "top-[-100%]");
      overlayDiv?.current?.classList?.remove("active");
    }

    setSearchInput("");
  }

  function openMobileMenu() {
    const menuClassList = mobileRef?.current?.classList;
    if (menuClassList?.contains("left-[-100%]")) {
      menuClassList?.replace("left-[-100%]", "left-0");
      overlayDiv?.current?.classList?.add("active");
      if (typeof window !== "undefined") {
        let html = document.querySelector("html");
        html.classList.add("active");
      }
    }
  }
  function closeMobileMenu() {
    const menuClassList = mobileRef?.current?.classList;
    if (menuClassList?.contains("left-0")) {
      menuClassList?.replace("left-0", "left-[-100%]");
      overlayDiv?.current?.classList?.remove("active");
      if (typeof window !== "undefined") {
        let html = document.querySelector("html");
        html.classList.remove("active");
      }
    }
    closeSearch();
  }

  useEffect(() => {
    const menuClassList = mobileRef?.current?.classList;
    if (activePage !== "/" || activePage === "/") {
      menuClassList?.replace("left-0", "left-[-100%]");
      setOpen(false);
      overlayDiv?.current?.classList?.remove("active");
    }
  }, [activePage]);

  let language;
  if (typeof window !== "undefined") {
    language = localStorage.getItem("i18nextLng");
    let html = document.querySelector("html");
    html.classList.remove("active");
  }

  const langSwitcher = async () => {
    setOpen(false);
  };
  const langs = ["az", "en", "ru"];

  const langChecker = useCallback((lang = "az") => {
    if (typeof localStorage !== "undefined") {
      return lang !== localStorage.getItem("i18nextLng");
    }
  }, []);

  const myLang = langs?.filter(langChecker);

  const createQueryString = useCallback(
    (name, value) => {
      const params =
        searchParams !== undefined
          ? new URLSearchParams(searchParams || undefined)
          : "";
      params?.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const onCodeClose = (e) => {
    if (e.keyCode === 27) {
      closeSearch();
      setPortfolio([]);
      setServices([]);
      setBlogs([]);
    } else if (e.keyCode === 13) {
      closeSearch();
      const query =
        searchInput !== undefined ? createQueryString("q", searchInput) : "";
      router.push(`/${params?.code}/search/?${query}`);
    }
  };

  return (
    <>
      <div
        onClick={closeMobileMenu}
        ref={overlayDiv}
        className="mobile-menu-overlay overflow-x-hidden block fixed left-0 top-0 bottom-0 right-0 z-[100] overlay "
      />
      <div
        className={` w-full py-[20px] 2xl:py-[15px]  top-0 left-0 right-0 z-[300] bg-[#fff] border-b-[1px]
          border-[#C5CEE0] ${scrolledFromTop ? "header-active" : ""}`}
      >
        <nav className="grid grid-cols-12 3xl:place-items-center   justify-center lg:flex lg:justify-between lg:items-center max-w-[1580px]  2xl:max-w-[1480px] xl:max-w-[1380px] m-auto lg:px-4">
          <div className="col-span-5 left  flex justify-start lg:hidden">
            <ul className="flex items-center gap-2  uppercase font-normal header-colors 2xl:pr-[40px] xl:pr-[0px] ">
              <li
                onClick={openSearch}
                className=" px-4 py-2 child_li cursor-pointer border-[2px] border-[#E9ECF4] rounded-[48px] p-[2px]"
              >
                <img className="w-[15px]" src="/search-blue.svg" alt="search" />
              </li>
              <li
                className={`px-4 xl:px-2 2xl:px-2 child_li w-max ${
                  activePage === `/${params?.code}`
                    ? "text-[#E1251B] font-semibold "
                    : ""
                }`}
              >
                <Link className="w-max" href={`/${params?.code}`}>
                  {data_translate?.header_1_text}
                </Link>
              </li>
              <li className="relative px-4 2xl:px-2 parent_li ">
                <p className="cursor-pointer">
                  {" "}
                  {data_translate?.header_2_text}
                </p>
                <ul className=" flex-col absolute z-30 capitalize afterhover_ul top-[30px]  left-0 bg-[#F7F7FA] flex w-max opacity-0 invisible">
                  <li
                    className={`border-b-[2px] border-[#E9ECF4]  ${
                      activePage === `/${params?.code}/haqqimizda`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      href={`/${params?.code}/haqqimizda`}
                      className="w-full block py-3 px-4 font-normal"
                    >
                      {data_translate?.header_3_text}
                    </Link>
                  </li>
                  <li
                    className={`border-b-[2px] border-[#E9ECF4] ${
                      activePage === `/${params?.code}/meqsed`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      className="w-full block py-3 px-4 font-normal"
                      href={`/${params?.code}/meqsed`}
                    >
                      {data_translate?.header_4_text}
                    </Link>
                  </li>
                  <li
                    className={`border-b-[2px] border-[#E9ECF4] ${
                      activePage === `/${params?.code}/rehber`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      className="w-full block py-3 px-4 font-normal"
                      href={`/${params?.code}/rehber`}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          data_translate?.header_5_text
                        ),
                      }}
                    />
                  </li>
                  <li
                    className={`border-b-[2px] border-[#E9ECF4] ${
                      activePage === `/${params?.code}/sertifikatlar`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      className="w-full block py-3 px-4 font-normal"
                      href={`/${params?.code}/sertifikatlar`}
                    >
                      {data_translate?.header_6_text}
                    </Link>
                  </li>
                  <li
                    className={`border-b-[2px] border-[#E9ECF4] ${
                      activePage === `/${params?.code}/tovsiye`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      className="w-full block py-3 px-4 font-normal"
                      href={`/${params?.code}/tovsiye`}
                    >
                      {data_translate?.header_7_text}
                    </Link>
                  </li>
                  <li
                    className={`${
                      activePage === `/${params?.code}/faq`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      className="w-full block py-3 px-4 font-normal"
                      href={`/${params?.code}/faq`}
                    >
                      {data_translate?.header_8_text}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`px-4 2xl:px-2 child_li w-max ${
                  activePage === `/${params?.code}/xidmetler`
                    ? "text-[#E1251B] font-semibold "
                    : ""
                }`}
              >
                <Link href={`/${params?.code}/xidmetler`}>
                  {data_translate?.header_9_text}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 center flex items-center justify-center lg:pl-4">
            <Link href={`/${params?.code}`}>
              {scrolledFromTop ? (
                <img
                  src="/header_logo_white.svg"
                  alt="header_logo_white"
                  className="w-[150px] 2xl:w-[120px] xl:w-[80px] object-cover"
                />
              ) : (
                <img
                  src="/header_logo.svg"
                  alt="header_logo"
                  className="w-[150px] 2xl:w-[120px] xl:w-[80px] object-cover"
                />
              )}
            </Link>
          </div>
          <div className="col-span-5  right  flex 2xl:pl-[20px] xl:pl-[10px] lg:hidden">
            <ul className="flex items-center justify-end w-full gap-2 uppercase header-colors  ">
              <li
                className={`px-4 2xl:px-2 child_li ${
                  activePage === `/${params?.code}/portfolio`
                    ? "text-[#E1251B] font-semibold "
                    : ""
                }`}
              >
                <Link href={`/${params?.code}/portfolio`}>
                  {data_translate?.header_10_text}
                </Link>
              </li>

              <li className="relative px-4 2xl:px-2 parent_li w-max">
                <p className="cursor-pointer">
                  {data_translate?.header_11_text}
                </p>
                <ul className=" flex-col absolute z-30 capitalize afterhover_ul top-[30px]  right-4 bg-[#F7F7FA] flex w-max opacity-0 invisible">
                  <li
                    className={`border-b-[2px] border-[#E9ECF4] ${
                      activePage === `/${params?.code}/kiv`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      className="w-full block py-2 px-4 font-normal"
                      href={`/${params?.code}/kiv`}
                    >
                      {data_translate?.header_12_text}
                    </Link>
                  </li>
                  <li
                    className={`${
                      activePage === `/${params?.code}/blog`
                        ? "text-[#E1251B] font-semibold "
                        : ""
                    }`}
                  >
                    <Link
                      href={`/${params?.code}/blog`}
                      className="w-full block py-2 px-4 font-normal"
                    >
                      {data_translate?.header_13_text}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`px-4 xl:px-2 child_li ${
                  activePage === `/${params?.code}/elaqe`
                    ? "text-[#E1251B] font-semibold "
                    : ""
                }`}
              >
                <Link href={`/${params?.code}/elaqe`}>
                  {data_translate?.header_14_text}
                </Link>
              </li>
              <li
                className={`px-6 py-1 font-normal   cursor-pointer uppercase rounded-full  border border-[#E9ECF4] lang
                  ${scrolledFromTop ? "text-[#fff]" : "text-[#000]"}
                  `}
              >
                <div className="w-max">
                  <Lang
                    toggle={() => setOpen(!open)}
                    langs={langs}
                    scrolledFromTop={scrolledFromTop}
                    switchLang={
                      open && (
                        <div className="absolute  mt-6 right-[-30px] top-[8px] h-[50px] z-50   flex flex-col text-left items-center justify-center ">
                          {myLang?.map((lang, index) => (
                            <button
                              className={`z-[200] capitalize 0 text-[15px] xl:text-[13px]  transitions  overflow-hidden px-6 py-1 rounded-lg bg-white-A700 hover:bg-[#5D9733] tran hover:text-white-A700 `}
                              key={index}
                              onClick={() => langSwitcher(lang)}
                            >
                              {lang}
                            </button>
                          ))}
                        </div>
                      )
                    }
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className=" items-center lg:gap-5 hidden lg:flex">
            <div
              onClick={openSearch}
              className="px-4 py-2 hidden lg:block child_li cursor-pointer border-[2px] border-[#E9ECF4] rounded-[48px] p-[2px]"
            >
              <img src="/search-blue.svg" className="w-[15px]" alt="search" />
            </div>
            <div className="w-max hidden lg:block ">
              <Lang
                toggle={() => setOpen(!open)}
                langs={langs}
                scrolledFromTop={scrolledFromTop}
                switchLang={
                  open && (
                    <div className="absolute  mt-6 right-[-30px] top-[8px] h-[50px] flex flex-col text-left items-center justify-center ">
                      {myLang?.map((lang, index) => (
                        <button
                          className={` z-[200] capitalize text-[15px] xl:text-[13px] transitions border border-solid border-blue_gray-100 overflow-hidden px-6 py-1 rounded-lg bg-white-A700 hover:bg-[#5D9733] tran hover:text-white-A700 `}
                          key={index}
                          onClick={() => langSwitcher(lang)}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  )
                }
              />
            </div>
            <div
              onClick={openMobileMenu}
              className="burger hidden lg:block mobile_header_open"
            >
              <RxHamburgerMenu className="text-2xl cursor-pointer" />
            </div>
          </div>
        </nav>
      </div>
      <div
        ref={mobileRef}
        className="mobile-menu fixed top-0 pt-28 pl-16 left-[-100%] z-[1000] h-full w-[400px] md:w-full bg-white trans  "
      >
        <p
          onClick={closeMobileMenu}
          className="absolute top-10 right-10 cursor-pointer"
        >
          <IoMdClose className="text-2xl" />
        </p>
        <ul className="flex flex-col gap-2">
          {mobileHeader &&
            mobileHeader?.map((cur, i) => {
              return (
                <li
                  key={i}
                  onClick={handleOpen(cur?.title)}
                  className="relative"
                >
                  {cur?.href === null ? (
                    <h3 className=" flex text-lg capitalize items-center gap-2 cursor-pointer trans hover:text-[#003B71]">
                      {cur?.title}
                      <span>
                        {openCategory === cur?.title ? (
                          <FaChevronUp className="text-sm" />
                        ) : (
                          <FaChevronDown className="text-sm" />
                        )}
                      </span>
                    </h3>
                  ) : (
                    <Link
                      className="text-lg capitalize trans hover:text-[#003B71]"
                      href={`/${cur?.href}`}
                    >
                      {cur?.title}
                    </Link>
                  )}
                  {cur?.subMenu !== null && (
                    <ul
                      className={`trans gap-3 ${
                        openCategory === cur?.title
                          ? "flex visible h-full flex-col mt-3  ml-2  mb-3 "
                          : " invisible h-0"
                      }`}
                    >
                      {cur &&
                        openCategory === cur?.title &&
                        cur?.subMenu?.map((elem, i) => {
                          return (
                            <li
                              className="cursor-pointer trans hover:text-[#003B71]"
                              key={i}
                            >
                              <Link
                                href={`/${params?.code}/${elem?.href}`}
                                className="flex h-full w-full capitalize"
                              >
                                {elem?.title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
      <div
        ref={serachComponent}
        className="fixed top-[-100%] left-0 right-0 w-full bg-white  py-6 z-[500] trans "
      >
        <div className="relative mx-8 lg:mx-3">
          <span className="absolute top-3 left-4">
            <img src="/search-lg.svg" alt="search" />
          </span>
          <input
            value={searchInput}
            ref={searchInputRef}
            onKeyUp={(e) => onCodeClose(e)}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={data_translate?.search}
            type="text"
            className="w-full border border-[#E9ECF4] rounded-full py-3 pl-12 pr-10 shadow-none outline-none"
          />
          <span
            onClick={closeSearch}
            className="absolute top-[18px] right-4 cursor-pointer"
          >
            <img src="/close.svg" alt="close" />
          </span>
        </div>
        <Search
          notFound={!portfolio?.length && !services?.length && !blogs?.length}
          loading={loading}
          inputValue={searchInput}
          portfolio={portfolio}
          services={services}
          blogs={blogs}
          closeSearch={closeSearch}
          netice={data_translate?.netice}
          params={params}
        />
      </div>
    </>
  );
};

export default Header;
