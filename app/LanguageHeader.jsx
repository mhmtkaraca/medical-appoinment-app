'use client';

import { useChangeLocale } from "@/locales/client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCurrentLocale } from "@/locales/client";  

const LanguageHeader = () => {
  const changeLocale = useChangeLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState(useCurrentLocale());

  const handleLanguageChange = (event) => {
    const newLocale = event.target.value;
    setLanguage(newLocale);
    changeLocale(newLocale);
    router.push(pathname, pathname, { locale: newLocale });
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="ml-4 p-2 border rounded-md"
    >
      {/* <option value="">select language</option> */}
      <option value="en">EN 🇬🇧</option>
      <option value="de">DE 🇩🇪</option>
      <option value="fr">FR 🇫🇷</option>
      <option value="ar">AR 🇸🇦</option>
      <option value="it">IT 🇮🇹</option>
      <option value="tr">TR 🇹🇷</option>
      <option value="pt">PT 🇵🇹</option>
      <option value="ro">RO 🇷🇴</option>
      <option value="fi">FI 🇫🇮</option>
      <option value="el">EL 🇬🇷</option>
    </select>
  );
};

export default LanguageHeader;
