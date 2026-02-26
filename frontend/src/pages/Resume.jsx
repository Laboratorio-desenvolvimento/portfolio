import { useLanguage } from "../services/translation";
const Resume = () => {
    const { t, idioma, changeLanguage } = useLanguage()

    return (
        <div>
            <h1>{t('resume').charAt(0).toUpperCase() + t('resume').slice(1)}</h1>
        </div>
    );
};

export default Resume;