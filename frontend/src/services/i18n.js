import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en.json";
import ptTranslation from "../locales/pt.json";


i18n
    .use(initReactI18next)
    .init({
        lng: "en", // Idioma padrão
        fallbackLng: "en", // Idioma de contingência
        resources: {
            en: {
                translation: enTranslation
            },
            pt: {
                translation: ptTranslation
            },
        },
        interpolation: {
            escapeValue: false // Evita a necessidade de escapar caracteres especiais em traduções
        }
    });

export default i18n;