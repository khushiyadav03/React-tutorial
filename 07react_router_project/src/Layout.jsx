import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Header />
            <main>
                {/* Outlet child routes ko yaha render karta hai: Home, About, Contact, etc. */}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
