"use client";

import { useRef, useState } from "react";

const MyAccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef();

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${
            active === faq?.id ? "active" : ""
          }`}
          onClick={() => handleToggle(faq?.id)}
        >
          <h5 className="rc-accordion-title text-[#003B71] text-lg">
            {faq?.sual}
          </h5>
          <img
            src="/faq.svg"
            className={`faqq ${
              active === faq?.id ? "rotate-180 color1" : "rotate-0"
            }`}
            alt="faq"
          />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === faq?.id ? "show" : ""}`}
        style={
          active === faq?.id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{faq?.cavab}</p>
        </div>
      </div>
    </div>
  );
};

const Fag = ({ data, fag }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="w-[685px] lg:w-full xl:px-10 lg:px-6 m-auto min-h-[65vh] pt-10 faq mb-40 ">
        <h3 className="text-[#003B71] font-bold text-3xl lg:text-lg text-center mb-10">
          {fag}
        </h3>
        {data?.faqs?.map((faq) => (
          <MyAccordionItem
            key={faq?.id}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        ))}
      </div>
    </>
  );
};

export default Fag;
