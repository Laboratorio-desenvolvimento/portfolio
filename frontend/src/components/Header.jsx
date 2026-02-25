import { useLanguage } from '../services/translation'
import '../styles/header.css'

function Header(){
    const { t, idioma, changeLanguage } = useLanguage();

    return (
        <>
          <div className="cabeca">
            <h4 className="nome">XXXX</h4>
            <div className="nav-links">
              <p><span id="hashtage">#</span>{t('home')}</p>
              <p><span id="hashtage">#</span>{t('projects')}</p>
              <p><span id="hashtage">#</span>{t('about')}</p>
              <p><span id="hashtage">#</span>{t('contact')}</p>
              <select className="selecao-idioma" value={idioma} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="EN">EN</option>
                <option value="PT">PT</option>
              </select>
            </div>
          </div>
        </>
      )
}

export default Header