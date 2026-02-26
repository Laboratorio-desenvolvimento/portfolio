import { useLanguage } from '../services/translation'

const AboutMe = () => {
    const { t, idioma, changeLanguage } = useLanguage()
    
    return (
        <div>
            <h1>{t('about').charAt(0).toUpperCase() + t('about').slice(1)}</h1>
        </div>
    );
};

export default AboutMe;
