"use client";

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactPost = ({
  teklif,
  irad,
  sikayet,
  adSoyad,
  mesaj,
  sending,
  send,
  phones,
  emails,
  map,
  contact_text_2_1,
  contact_text_3_1,
  contact_text_4_1,
  contact_text_5_1,
  settingsNumber,
  settingsEmail,
  seetingsAdress,
}) => {
  const [form, setForm] = useState({
    email: "",
    number: "",
    fullname: "",
    muraciet_formasi: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      // Yalnızca rakamlara izin ver
      const newValue = value.replace(/[^0-9]/g, "");
      setForm({
        ...form,
        [name]: newValue,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/contact_post`,
      data: form,
    })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: contact_text_2_1,
            text: contact_text_3_1,
            confirmButtonText: contact_text_4_1,
            customClass: { confirmButton: "text-black-700" },
          });
          setForm({
            email: "",
            number: "",
            fullname: "",
            muraciet_formasi: "",
            message: "",
          });
          setLoading(false);
        }
      })
      .catch(() => {
        Swal.fire(contact_text_5_1, ``, "error");
        setLoading(false);
      });
  };


  return (
    <>
      <div className="col-span-8 lg:col-span-12 bg-[#E7EFF7] relative z-30 overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-10 lg:p-5 w-[80%] lg:w-full"
        >
          <div className="grid grid-cols-12 gap-4 mb-4 contact_radio">
            <div className="col-span-4 lg:col-span-6 md:col-span-12 border border-[#C5CEE0] radio_inp cursor-pointer bg-white flex justify-between px-6 py-4 rounded-[70px]">
              <label
                className="text-[#003B71] font-medium text-xl lg:text-lg cursor-pointer block w-full"
                htmlFor="input_1"
              >
                {teklif}
              </label>
              <input
                value="1"
                onChange={handleChange}
                name="muraciet_formasi"
                type="radio"
                id="input_1"
              />
            </div>
            <div className="col-span-4 lg:col-span-6 md:col-span-12 border border-[#C5CEE0] radio_inp cursor-pointer bg-white flex justify-between px-6 py-4 rounded-[70px]">
              <label
                className="text-[#003B71] font-medium text-xl lg:text-lg cursor-pointer block w-full"
                htmlFor="input_2"
              >
                {irad}
              </label>
              <input
                value="2"
                onChange={handleChange}
                name="muraciet_formasi"
                type="radio"
                id="input_2"
              />
            </div>
            <div className="col-span-4 lg:col-span-6 md:col-span-12 border border-[#C5CEE0] radio_inp cursor-pointer bg-white flex justify-between px-6 py-4 rounded-[70px]">
              <label
                className="text-[#003B71] font-medium text-xl lg:text-lg cursor-pointer  block w-full"
                htmlFor="input_3"
              >
                {sikayet}
              </label>
              <input
                value="3"
                onChange={handleChange}
                name="muraciet_formasi"
                type="radio"
                id="input_3"
              />
            </div>
          </div>
          <div className="input_row">
            <input
              value={form.fullname}
              onChange={handleChange}
              type="text"
              id="fullname"
              name="fullname"
              placeholder={adSoyad}
              className="py-4 mb-4 px-6 w-full border-none shadow-none outline-none placeholder:text-[#5B748D] placeholder:capitalize"
            />
          </div>
          <div className="input_row">
            <input
              name="number"
              id="number"
              value={form.number}
              onChange={handleChange}
              type="text"
              placeholder="994 00 000 00 00"
              className="py-4 mb-4 px-6 w-full border-none shadow-none outline-none placeholder:text-[#5B748D] placeholder:capitalize"
            />
          </div>
          <div className="input_row">
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="text"
              placeholder={emails}
              className="py-4 mb-4 px-6 w-full border-none shadow-none outline-none placeholder:text-[#5B748D] placeholder:capitalize"
            />
          </div>
          <div className="">
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={mesaj}
              className="py-4 mb-4 px-6 h-[200px] w-full border-none shadow-none outline-none placeholder:text-[#5B748D] placeholder:capitalize resize-none"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="flex items-center bg-[#003B71] px-8 py-3 capitalize text-white">
              {loading ? sending : send}
              <span className="block pl-3">
                <img src="/send.svg" alt="send" />
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-4 lg:col-span-12 flex justify-center items-start mt-10">
        <div className="bg-[#003B71] w-full ml-[-60px] lg:ml-0 z-[50] relative">
          <img
            src="/absolute_pic.svg"
            className="absolute top-0 right-0 h-full"
            alt="absolute_pic"
          />
          <div className="flex flex-col px-28 3xl:px-12 py-12 xl:px-10 lg:py-6">
            <div className="flex flex-col mb-10">
              <h6 className="text-[#E1251B] font-normal text-xl mb-2 w-max">
                {phones}
              </h6>
              <a
                className="text-white font-semibold text-2xl xl:text-lg  w-max"
                href={`tel:${settingsNumber}`}
              >
                {settingsNumber}
              </a>
            </div>
            <div className="flex flex-col mb-10">
              <h6 className="text-[#E1251B] font-normal text-xl mb-2  w-max">
                {emails}
              </h6>
              <a
                className="text-white font-semibold text-2xl xl:text-lg  w-max"
                href={`mailto:${settingsEmail}`}
              >
                {settingsEmail}
              </a>
            </div>
            <div className="flex flex-col">
              <h6 className="text-[#E1251B] font-normal text-xl mb-2  w-max">
                {map}
              </h6>
              <a
                className="text-white font-semibold text-2xl xl:text-lg "
                href="#"
              >
                {seetingsAdress}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPost;
