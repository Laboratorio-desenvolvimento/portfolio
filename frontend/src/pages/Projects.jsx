import { useLanguage } from "../services/translation";
import '../styles/projects.css'
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';

const Projects = () => {
    const { t } = useLanguage()

    const projectsData = [
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
        },
        {
            image: project4Image,
            techs: ['React', 'Node.js'],
            titleKey: 'projects.project-4-title',
            descKey: 'projects.project-4-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        }
    ];

    const smallProjectsData = [
        {
            techs: ['Java', 'Springboot'],
            titleKey: 'smallprojects.project-1-title',
            descKey: 'smallprojects.project-1-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            techs: ['Python', 'Django'],
            titleKey: 'smallprojects.project-2-title',
            descKey: 'smallprojects.project-2-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            techs: ['JavaScript', 'Node.js'],
            titleKey: 'smallprojects.project-3-title',
            descKey: 'smallprojects.project-3-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            techs: ['C#', '.NET'],
            titleKey: 'smallprojects.project-4-title',
            descKey: 'smallprojects.project-4-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        }
    ];

    return (
        <section className="projects-content">
            <h1 className="projects-title">
                <span className="projects-tag">/</span>
                {t('projects.title')}
            </h1>

            <p className="projects-subtitle">{t('projects.subtitle')}</p>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.complete-projects')}
            </h2>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <img src={project.image} alt={t(project.titleKey)} className="best-project-image" />
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">&gt; Demo</a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.small-projects')}
            </h2>

            <div className="projects-grid">
                {smallProjectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">&gt; Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
