import { Link } from 'react-router-dom'
import { useLanguage } from '../services/translation'
import "../styles/home.css"

const Home = () => {
    const { t, idioma, changeLanguage } = useLanguage()

    return (
        <div className="home-content">
            <div className="home-infos">
                <h1 className="nome">{t("nome")}</h1>
                <h3 className="profissao">{t("profissao")}</h3>
                <div className="cta-box">
                    <Link to="projects" className="cta-item">{t("veja-projetos")}</Link>
                    <a href="#contact" className="cta-item">{t("entre-em-contato")}</a>
                </div>
            </div>
            <div className="home-foto">
                <div className="photo-box" aria-hidden="true"></div>
                <p>{t("trabalhando-atualmente")}</p>
            </div>
        </div>
    );
};

export default Home;
