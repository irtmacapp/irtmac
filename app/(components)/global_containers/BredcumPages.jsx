import React from "react";

const BredcumPages = ({ name, longtext, classesName }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="text-[#003B71] text-3xl xl:text-2xl font-bold mb-6">{name}</h3>
      <p className={`text-[#003B71] ${classesName}`}>{longtext}</p>
    </div>
  );
};

export default BredcumPages;
