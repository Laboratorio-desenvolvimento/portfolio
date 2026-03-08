import { Link } from 'react-router-dom'
import { useLanguage } from '../services/translation'
import "../styles/home.css"
//Componente de contatos
import Contacts from '../components/contacts.jsx'
//Componente melhores projetos
import BestProjects from '../components/BestProjects.jsx'
//Componente habilidades
import Skills from '../components/Skills.jsx'
//Icone localidade
import { MdLocationOn } from "react-icons/md";
// Foto
import foto from "../assets/foto.png"

const Home = () => {
    const { t } = useLanguage()

    return (
        <div className="home-content">
            <div className="home-intro">
                <div className="home-infos">
                    <div className='home-container'>
                        <h1 className="nome">{t("nome")}</h1>
                        <h3 className="profissao">{t("profissao")}</h3>
                    </div>

                    <div className="home-bottom">
                        <div className="cta-box">
                            <Link to="projects" className="cta-item">{t("veja-projetos")}</Link>
                            <a href="#contact" className="cta-item">{t("entre-em-contato")}</a>
                        </div>

                        <div className="location">
                            <MdLocationOn className="icon" />
                            <p>Belo Horizonte, MG - Brasil</p>
                        </div>
                    </div>
                </div>
                <div className="home-foto">
                    <img src={foto} alt="Foto de perfil" className="photo-box" />
                    <div className="trabalhando-box">
                        <span className="trabalhando-quadrado"></span>
                        <p>
                            {t("trabalhando-atualmente")} <strong>Portfolio</strong>
                        </p>
                    </div>
                </div>
            </div>

            <div className="best-projects-container"><BestProjects /></div>

            <div className="home-skills"><Skills /></div>

            <div className="contacts-container"><Contacts /></div>
        </div>
    );
};

export default Home;
