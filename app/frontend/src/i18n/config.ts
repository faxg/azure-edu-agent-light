import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import daTranslation from "../locales/da/translation.json";
import deTranslation from "../locales/de/translation.json";
import enTranslation from "../locales/en/translation.json";
import esTranslation from "../locales/es/translation.json";
import frTranslation from "../locales/fr/translation.json";
import itTranslation from "../locales/it/translation.json";
import jaTranslation from "../locales/ja/translation.json";
import nlTranslation from "../locales/nl/translation.json";
import ptBRTranslation from "../locales/ptBR/translation.json";
import trTranslation from "../locales/tr/translation.json";

export const supportedLngs: { [key: string]: { name: string; locale: string } } = {
    da: {
        name: "Dansk",
        locale: "da-DK"
    },
    de: {
        name: "Deutsch",
        locale: "de-DE"
    },
    en: {
        name: "English",
        locale: "en-US"
    },
    es: {
        name: "Español",
        locale: "es-ES"
    },
    fr: {
        name: "Français",
        locale: "fr-FR"
    },
    it: {
        name: "Italian",
        locale: "it-IT"
    },
    ja: {
        name: "日本語",
        locale: "ja-JP"
    },
    nl: {
        name: "Nederlands",
        locale: "nl-NL"
    },
    ptBR: {
        name: "Português Brasileiro",
        locale: "pt-BR"
    },
    tr: {
        name: "Türkçe",
        locale: "tr-TR"
    }
};

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            da: { translation: daTranslation },
            de: { translation: deTranslation },
            en: { translation: enTranslation },
            es: { translation: esTranslation },
            it: { translation: itTranslation },
            fr: { translation: frTranslation },
            ja: { translation: jaTranslation },
            nl: { translation: nlTranslation },
            ptBR: { translation: ptBRTranslation },
            tr: { translation: trTranslation }
        },
        fallbackLng: "en",
        supportedLngs: Object.keys(supportedLngs),
        debug: import.meta.env.DEV,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18next;
