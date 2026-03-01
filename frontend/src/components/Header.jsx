import { Link } from 'react-router-dom'
import { useLanguage } from '../services/translation'
import '../styles/header.css'


const Header = () => {
  const { t, idioma, changeLanguage } = useLanguage()

  return (
    <header className="cabeca" style={ { padding: '1rem', backgroundColor: '#282C33', opacity: 0.9 } }>
      <h4 className="titulo">XXXX</h4>    

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">
              <span className="hashtag">#</span>{t('home')}
            </Link>
          </li>

          <li>
            <Link to="/projects" className="nav-item">
              <span className="hashtag">#</span>{t('projects')}
            </Link>
          </li>

          <li>
            <Link to="/aboutme" className="nav-item">
              <span className="hashtag">#</span>{t('about')}
            </Link>
          </li>

          <li>
            <Link to="/resume" className="nav-item">
              <span className="hashtag">#</span>{t('resume')}
            </Link>
          </li>

          <li>
            <select
              className="selecao-idioma"
              value={idioma}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="PT">PT-BR</option>
              <option value="EN">EN</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
