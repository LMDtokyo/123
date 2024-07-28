import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                about : "About",
                skill : "Skills",
                project : "Projects"
            }
        },
        ru: {
            translation: {
                about : "О нас",
                skill : "Навыки",
                project : "Проекты"
            }
        }
    },
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
