import { useLanguage } from '../services/translation'
const Footer = () => {
    
    const { t, idioma, changeLanguage } = useLanguage()
    return (
        <footer style={{ borderTop: '1px solid #ABB2BF', padding: '1rem', marginTop: 'auto', color: '#ABB2BF' }}>
            <p>&copy; {new Date().getFullYear()} {t('portfolio')}</p>
        </footer>
    );
};

export default Footer;
