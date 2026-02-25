import { useLanguage } from "../services/translation";
const Projects = () => {
    const { t, idioma, changeLanguage } = useLanguage()

    return (
        <div>
            <h1>{t('projects').charAt(0).toUpperCase() + t('projects').slice(1)}</h1>
        </div>
    );
};

export default Projects;
