import MaxWidth from "../../MaxWidth/MaxWidth";
import ContactPost from "./ContactPost";

const Contact = ({
  contact,
  contact_1,
  map,
  adSoyad_1,
  mesaj_1,
  sending_1,
  send_1,
  phones_1,
  emails_1,
  map_1,
  contact_text_2,
  contact_text_3,
  contact_text_4,
  contact_text_5,
  settingsNumber,
  settingsEmail,
  seetingsAdress,
  grafig,
}) => {
  return (
    <>
      <section className=" mt-[250px] mb-[100px]">
        <MaxWidth>
          <h3 className="text-center text-[#003B71] text-[36px] font-['TTForsTrial-Medium'] mb-6 capitalize">
            {contact}
          </h3>
          <div className="flex items-center justify-center">
            <p className="text-center text-[#008ade] text-[24px] mb-10 w-[40%] lg:w-full">
              {contact_1}
            </p>
          </div>
          <div className="">
            <ContactPost
              adSoyad={adSoyad_1}
              mesaj={mesaj_1}
              sending={sending_1}
              send={send_1}
              phones={phones_1}
              emails={emails_1}
              map={map_1}
              contact_text_2_1={contact_text_2}
              contact_text_3_1={contact_text_3}
              contact_text_4_1={contact_text_4}
              contact_text_5_1={contact_text_5}
              settingsNumber={settingsNumber}
              settingsEmail={settingsEmail}
              seetingsAdress={seetingsAdress}
            />
          </div>
          <div className="relative mt-[80px]">
            <iframe
              src={map}
              allowFullScreen=""
              loading="lazy"
              referRerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] overflow-hidden rounded-[20px]"
            ></iframe>
            <span className="w-[900px] py-[12px] css-box-shadow font-semibold absolute bottom-[40px] left-1/2 z-30 -translate-x-1/2 flex items-center justify-center text-[24px] text-[#002d74] bg-[#fff] rounded-[90px]">
              {grafig}
            </span>
          </div>
        </MaxWidth>
      </section>
    </>
  );
};

export default Contact;
