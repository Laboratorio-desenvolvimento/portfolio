import { useLanguage } from '../services/translation'
import '../styles/about.css'

const AboutMe = () => {
    const { t } = useLanguage()

    return (
        <section className="about-content">
            <h1 className="about-title">
                <span className="about-tag">/</span>
                {t('about')}
            </h1>

            <p className="about-subtitle">{t('about-subtitle')}</p>

            <div className="about-bio">
                <p>{t('about-paragraph-1')}</p>
                <p>{t('about-paragraph-2')}</p>
            </div>
        </section>
    )
}

export default AboutMe
