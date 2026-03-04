import { useLanguage } from '../services/translation'
import '../styles/about.css'
import amazonLogo from "../assets/amazon.png";
import googleLogo from "../assets/google.png"
import ifoodLogo from "../assets/IfoodIcon.png"

const AboutMe = () => {
    const { t } = useLanguage()

    const skillsData = [
        {
            titleKey: 'skills.skill-1-title',
            techs: "TyppeScript Python JavaScript Cobol"
        },
        {
            titleKey: 'skills.skill-2-title',
            techs: "VSCode Figma Linux Git Font Awesome"
        },
        {
            titleKey: 'skills.skill-3-title',
            techs: " React Vue Dinsnake Discord.js"
        },
        {
            titleKey: 'skills.skill-4-title',
            techs: "SQLite PostGreSQL Mongo"
        }
    ];

    return (
        <>
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

            <section className="skills-content">
                <h1 className="skills-title">
                    <span className="skills-tag">#</span>
                    {t('skills')}
                </h1>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-card">
                                <p className="skills-description">{t(skill.titleKey)}</p>
                            </div>
                            <p className="skills-details">{t(skill.techs)}</p>
                        </div>
                    ))}
                </div>

            </section>

            <section className="experience-content">
                <h1 className="experience-title">
                    <span className="experience-tag">#</span>
                    {t('experience')}
                    <hr></hr>
                </h1>
                <div className="timeline">
                    <div className="container">
                        <img src={amazonLogo} alt="AmazonLogo"/>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-1')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-1')}</h2>
                            <small> 2024-2026</small>
                            <p>{t('job-description-1')}</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={googleLogo} alt="GoogleLogo"/>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-2')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-1')}</h2>
                            <small> 2024-2026</small>
                            <p>{t('job-description-2')}</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={ifoodLogo} alt="IfoodLogo"/>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-3')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-2')}</h2>
                            <small> 2024-2026</small>
                            <p>{t('job-description-3')}</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={amazonLogo} alt="AmazonLogo"/>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-1')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-2')}</h2>
                            <small> 2024-2026</small>
                            <p>{t('job-description-3')}</p>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default AboutMe
