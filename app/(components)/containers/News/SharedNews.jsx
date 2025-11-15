import { FaFacebook, FaLinkedinIn, FaLink } from "react-icons/fa";

import { FacebookShareButton, LinkedinShareButton } from "react-share";
import Swal from "sweetalert2";

const SharedNews = ({ params, title, copy1, share }) => {
  const href = `${process.env.NEXT_PUBLIC_SITE_NAME}/${params?.code}/xeberler/${params?.id}/${params?.slug}`;

  const copyEmail = () => {
    const emailElement = window?.location?.href;
    if (emailElement) {
      const href = emailElement;
      if (navigator.clipboard && href) {
        navigator.clipboard
          .writeText(href)
          .then(() => {
            Swal.fire(`${copy1} `, `${href}`, "success");
          })
          .catch((err) => {
            console.error("Error:", err);
          });
      }
    }
  };

  return (
    <>
      <div className="fixed top-[300px] right-[40px] z-50">
        <div className=" border border-[#C5CEE0] lg:w-full  z-30 bg-white mr-7 p-4 lg:mr-0  w-max">
          <h4 className="text-black font-medium text-lg mb-6 lg:text-sm">
            {share}
          </h4>
          <ul className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-around items-center lg:w-full">
            <li className="bg-[#003B71] rounded-full p-[10px] lg:p-[8px] mb-4 cursor-pointer lg:mb-0 flex justify-center items-center">
              <FacebookShareButton
                url={href}
                title={title}
                quote={title}
                description={title}
              >
                <FaFacebook className="text-2xl lg:text-xl  text-white" />
              </FacebookShareButton>
            </li>

            <li className="bg-[#003B71] rounded-full p-[10px] lg:p-[8px] mb-4 cursor-pointer lg:mb-0 flex justify-center items-center">
              <LinkedinShareButton
                url={href}
                title={title}
                quote={title}
                description={title}
              >
                <FaLinkedinIn className="text-2xl lg:text-xl  text-white" />
              </LinkedinShareButton>
            </li>
            <li
              className="bg-[#003B71] rounded-full p-[10px] lg:p-[8px] cursor-pointer lg:mb-0"
              onClick={copyEmail}
            >
              <FaLink className="text-2xl lg:text-xl  text-white" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SharedNews;
