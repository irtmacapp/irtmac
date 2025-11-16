"use client";

import { useRef, useState } from "react";
import MaxWidth from "../../MaxWidth/MaxWidth";

const MyAccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef();

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle py-[16px] px-[24px] ${
            active === faq?.id ? "active" : ""
          }`}
          onClick={() => handleToggle(faq?.id)}
        >
          <h5 className="rc-accordion-title text-[#002d74] text-[16px] font-['TTForsTrial-Medium']">
            {faq?.sual}
          </h5>
          {active === faq?.id ? (
            <img src="/accardion_minus.svg" alt="faq" />
          ) : (
            <img src="/accardion_plus.svg" alt="faq" />
          )}
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
          <p className="mb-0 text-[14px]">{faq?.cavab}</p>
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
      <section className="mt-[250px]">
        <MaxWidth>
          <div className="w-[900px] lg:w-full xl:px-10 lg:px-6 m-auto min-h-[65vh] pt-10 faq mb-40 ">
            <h3 className="text-[#003B71] font-bold text-[36px] text-center mb-10">
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
        </MaxWidth>
      </section>
    </>
  );
};

export default Fag;
