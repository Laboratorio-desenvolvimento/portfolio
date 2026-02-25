import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
    const { t, i18n } = useTranslation();
    const [idioma, setIdioma] = useState('EN');

    useEffect(() => {
        setIdioma(i18n.language.toUpperCase());
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        setIdioma(lng);
        i18n.changeLanguage(lng.toLowerCase());
    };

    return {
        t,
        i18n,
        idioma,
        setIdioma,
        changeLanguage
    };
};
