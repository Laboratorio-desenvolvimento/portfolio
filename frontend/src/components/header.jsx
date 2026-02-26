import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ padding: '1rem' }}>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link to="/" style={{ color: '#ABB2BF', textDecoration: 'none' }}>Início</Link></li>
                    <li><Link to="/projects" style={{ color: '#ABB2BF', textDecoration: 'none' }}>Projetos</Link></li>
                    <li><Link to="/aboutme" style={{ color: '#ABB2BF', textDecoration: 'none' }}>Sobre mim</Link></li>
                    <li><Link to="/resume" style={{ color: '#ABB2BF', textDecoration: 'none' }}>Currículo</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
