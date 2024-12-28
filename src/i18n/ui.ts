import fr from "@/img/france.png";
import col from "@/img/col.png";
import usa from "@/img/usa.png";

export const languages = {
  es: {
    label: "Español",
    img: col,
  },
  en: {
    label: "English",
    img: usa,
  },
  fr: {
    label: "Frances",
    img: fr,
  },
};

export const defaultLang = "es";

export const ui = {
  en: {},
  es: {},
  fr: {},
} as const;
