import { useLanguage } from '../services/translation'

const Home = () => {
    const { t, idioma, changeLanguage } = useLanguage()

    return (
        <h1>
            {t('home').charAt(0).toUpperCase() + t('home').slice(1)}
        </h1>
    );
};

export default Home;
