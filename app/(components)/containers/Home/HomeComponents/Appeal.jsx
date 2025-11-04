"use client";
import axios from "axios";
import { useState } from "react";

import Swal from "sweetalert2";

const Appeal = ({ data, data_translate }) => {


  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    number: "",
    service_id: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Sadece rakam kontrolü
    if (name === "number" && !/^\d*$/.test(value)) {
      return; // Eğer değer rakam değilse, fonksiyonu durdur
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelect = (title, id) => {
    setForm({
      ...form,
      service_id: id,
    });
    setDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/homepage_post`,
      data: {
        ...form,
      },
    })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: `${data_translate?.contact_text_1}`,
            text: `${data_translate?.contact_text_3}`,
            confirmButtonText: `${data_translate?.contact_text_4}`,
            customClass: { confirmButton: "text-black-700" },
          });
          setForm({
            fullname: "",
            number: "",
            service_id: "",
          });
          setLoading(false);
        }
      })
      .catch(() => {
        Swal.fire(`${data_translate?.contact_text_5}`, ``, "error");
        setLoading(false);
      });
  };

  return (
    <section className="mt-16">
      <div className="max-w-[1580px]  2xl:max-w-[1380px] xl:max-w-[1150px] 3xl:px-16 xl:px-8  m-auto  lg:px-4">
        <div className="bg-[#E7EFF7] px-10 py-10 lg:py-5 lg:px-5">
          <h3 className="text-4xl text-[#003B71] text-center mb-6 lg:text-xl">
            {data_translate?.muraciet}
          </h3>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-11 xl:col-span-10 lg:col-span-12">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-4 lg:col-span-6 md:col-span-12">
                    <input
                      id="fullname"
                      type="text"
                      value={form.fullname}
                      onChange={handleChange}
                      name="fullname"
                      className="w-full py-4 px-6 outline-none rounded-none placeholder:text-[#5B748D]"
                      placeholder={data_translate?.adSoyad}
                    />
                  </div>
                  <div className="col-span-4 lg:col-span-6 md:col-span-12">
                    <input
                      id="number"
                      type="text"
                      value={form.number}
                      onChange={handleChange}
                      name="number"
                      className="w-full py-4 px-6 outline-none rounded-none placeholder:text-[#5B748D]"
                      placeholder="994 00 000 00 00"
                    />
                  </div>
                  <div className="col-span-4 lg:col-span-6 md:col-span-12 relative">
                    <div
                      className="w-full py-4 px-6 outline-none text-black placeholder:text-[#5B748D] cursor-pointer bg-white"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <div className="flex justify-between items-center">
                        <h3>
                          {data?.find((cur) => cur.id === form.service_id)
                            ?.title || data_translate?.selectService}
                        </h3>
                        <span>
                          <img
                            src="/down-svg.svg"
                            className={` trans ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                            alt="down"
                          />
                        </span>
                      </div>
                    </div>
                    {dropdownOpen && (
                      <ul className="absolute top-full left-0 w-full bg-white shadow-md z-10">
                        {data &&
                          data.map((cur, i) => (
                            <li
                              key={i}
                              name="service_id"
                              className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                              onClick={() => handleSelect(cur?.title, cur.id)}
                            >
                              {cur?.title}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-1 xl:col-span-2 lg:col-span-12 lg:flex lg:justify-end">
                <button className="flex w-max lg:w-max py-4 px-2 items-center justify-center lg:px-4 lg:py-2 text-white gap-2 capitalize bg-[#003B71] h-full">
                  {loading ? data_translate?.sending : data_translate?.send}
                  <span>
                    <img src="/send.svg" alt="send" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appeal;
