import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";

const Lang = ({ toggle, switchLang, langs }) => {
  const [language, setLanguage] = useState("az");
  const [selectedLangs, setSelectedLangs] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

  // URL'den veya LocalStorage'dan dili belirle
  useEffect(() => {
    const pathLang = pathname.split("/")[1];
    const savedLang = localStorage.getItem("i18nextLng") || "az";
    const validLang = langs.includes(pathLang) ? pathLang : savedLang;

    if (validLang !== language) {
      setLanguage(validLang);

      localStorage.setItem("i18nextLng", validLang);
    }
  }, [pathname, language, langs]);

  // Seçilen dili filtrele
  useEffect(() => {
    setSelectedLangs(langs.filter((lang) => lang !== language));
  }, [language, langs]);

  // Dil değiştir ve URL'yi güncelle
  const langSwitcher = async (lang) => {
    setLanguage(lang);
    localStorage.setItem("i18nextLng", lang);

    // URL'deki mevcut path'i koruyarak sadece dili değiştir
    const currentPath = pathname.split("/").slice(2).join("/") || "";
    router.replace(`/${lang}/${currentPath}`);
    toggle(false);
  };

  return (
    <div className="relative text-black rounded-full langMenu">
      <div
        onClick={toggle}
        className="flex items-center cursor-pointer justify-center"
      >
        <button className="text-black uppercase text-[15px] site_langs">
          {language}
        </button>
      </div>
      {switchLang && (
        <div className="absolute css-box-shadow mt-6 right-[-25px] z-50 uppercase bg-[#fff] px-[18px] py-2 top-[16px] h-[90px] rounded-[20px] flex flex-col text-left items-center justify-center">
          {selectedLangs?.map((lang, index) => (
            <button
              className="z-[200] text-[15px] xl:text-[13px] transitions uppercase px-1 py-2 bg-white-A700 trans flex justify-center items-center"
              key={index}
              onClick={() => langSwitcher(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lang;
