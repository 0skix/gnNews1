import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../data/en.json";
import pl from "../../data/pl.json";

const resources = {
	en: en,
	pl: pl,
};

i18n.use(initReactI18next).init({
	resources,
	lng: "pl",
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
