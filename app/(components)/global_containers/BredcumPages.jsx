import React from "react";

const BredcumPages = ({ name, longtext, classesName }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="text-[#002d74] text-[36px] font-semibold  mb-6">{name}</h3>
      <p className={`text-[#009ade] text-[24px] ${classesName}`}>{longtext}</p>
    </div>
  );
};

export default BredcumPages;
