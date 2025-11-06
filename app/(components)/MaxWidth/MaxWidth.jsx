const MaxWidth = ({ children, customClass = "" }) => {
  return (
    <div
      className={`max-w-[1390px] m-auto xl:max-w-full xl:px-[30px] lg:px-[20px] md:px-[10px]  ${customClass}`}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
