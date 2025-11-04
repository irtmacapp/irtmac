const Pagination = ({ totalPage, currentPage, onPageChange }) => {

  const maxPageNumbersToShow = totalPage;

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      if (
        i === 1 ||
        i === totalPage ||
        (i >= currentPage - maxPageNumbersToShow &&
          i <= currentPage + maxPageNumbersToShow)
      ) {
        pages.push(i);
      }
    }
    return pages;
  };

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center  mt-5  pt-5 lg:flex-col ">
      <div className="flex justify-center gap-[20px] items-center w-max px-11 py-2 lg:mb-4 border border-[#E9ECF4]">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2  rounded-md flex items-center gap-2 font-medium  tran lg:text-sm"
        >
          <img src="/arrow-narrow-left.svg" alt="arrow" />
        </button>
        <div className="flex items-center gap-2  lg:w-full lg:justify-center">
          {pageNumbers?.map((pageNum, index) => (
            <div key={pageNum}>
              {index > 0 && pageNumbers[index - 1] < pageNum - 1 && (
                <span className="mr-2">...</span>
              )}
              <button
                onClick={() => handlePageChange(pageNum)}
                className={`px-4 lg:px-2 py-2 lg:py-1 font-normal hover:text-[#E1251B] tran ${
                  currentPage === pageNum ? "text-[#E1251B] font-bold" : ""
                } rounded-md`}
              >
                {pageNum}
              </button>
              {index < pageNumbers.length - 1 &&
                pageNumbers[index + 1] > pageNum + 1}
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
            className="px-3 py-2  rounded-md flex items-center gap-2 font-medium tran lg:text-sm"
          >
            <img
              className="rotate-[-180deg]"
              src="/arrow-narrow-left.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
