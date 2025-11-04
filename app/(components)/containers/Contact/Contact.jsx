import ContactPost from "./ContactPost";

const Contact = ({
  contact,
  contact_1,
  teklif_1,
  irad_1,
  sikayet_1,
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
}) => {
  return (
    <>
      <section className=" pt-10 xl:pt-10 mb-20 max-w-[1580px]  2xl:max-w-[1380px] xl:max-w-[1150px] px-12  m-auto  lg:px-4 lg:pt-10 ">
        <h3 className="text-center text-[#003B71] font-semibold text-4xl lg:text-3xl mb-6 capitalize">
          {contact}
        </h3>
        <div className="flex items-center justify-center">
          <p className="text-center text-[#5B748D] font-normal text-2xl lg:text-xl mb-10 w-[40%] lg:w-full">
            {contact_1}
          </p>
        </div>
        <div className="grid grid-cols-12 ">
          <ContactPost
            teklif={teklif_1}
            irad={irad_1}
            sikayet={sikayet_1}
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
      </section>
    </>
  );
};

export default Contact;
