import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{
            backgroundColor: '#282C33',
            color: '#ABB2BF',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />
            <main style={{ padding: '2rem', flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
