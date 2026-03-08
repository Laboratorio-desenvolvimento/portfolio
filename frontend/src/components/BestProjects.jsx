import { Link } from 'react-router-dom'
import { useLanguage } from "../services/translation";
import "../styles/bestprojects.css"
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const BestProjects = () => {
    const { t } = useLanguage();

    const bestProjectsData = [
        {
            image: project1Image,
            techs: ['React', 'Node.js'],
            titleKey: 'projects.project-1-title',
            descKey: 'projects.project-1-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            image: project2Image,
            techs: ['React', 'Node.js'],
            titleKey: 'projects.project-2-title',
            descKey: 'projects.project-2-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            image: project3Image,
            techs: ['React', 'Node.js'],
            titleKey: 'projects.project-3-title',
            descKey: 'projects.project-3-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        }
    ];

    return (
        <section className="best-projects-content">
            <div className="best-projects-header">
                <h2 className="best-projects-title">
                    <span className="projects-tag">#</span>
                    {t("projects.best-projects")}
                </h2>
                <Link to="projects" className="all-projects">{t("ver-todos")}</Link>
            </div>

            <div className="projects-grid">
                {bestProjectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <img
                            src={project.image}
                            alt={t(project.titleKey)}
                            className="project-image"
                        />

                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <h3 className="project-title">
                            {t(project.titleKey)}
                        </h3>

                        <p className="project-description">
                            {t(project.descKey)}
                        </p>

                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                &gt; GitHub
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                &gt; Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestProjects;