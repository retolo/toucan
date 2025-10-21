import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { languageSettings } from "../locales";


i18next
    .use(initReactI18next)
    .init(languageSettings);

export default i18next;