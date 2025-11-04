import Link from "next/link";

const Bredcump = ({ name, seeall, longtext, href }) => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap lg:gap-3 lg:flex-col lg:items-start">
        <h3 className="text-[#003B71] text-4xl lg:text-2xl ">
          {name}
        </h3>
        <Link href={href} className="flex items-center gap-3 text-[#5B748D]">
          {seeall}
          <span className="text-[#5B748D]">
            <img src="/readmore/readmore.svg" alt="readmore" />
          </span>
        </Link>
      </div>
      {longtext && <p className="text-xl pt-6 text-[#003B71]">{longtext}</p>}
    </>
  );
};

export default Bredcump;
