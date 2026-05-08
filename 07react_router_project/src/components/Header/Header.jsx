import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    // useState se mobile menu ka open/close status yaad rakh rahe hain.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // NavLink hume isActive deta hai, jisse active page ka style alag kar sakte hain.
    const navLinkClass = ({ isActive }) =>
        `block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
        ${isActive
            ? 'text-rose-700 bg-rose-50'
            : 'text-slate-700 hover:text-rose-700 hover:bg-rose-50'
        }`;

    return (
        <header className="sticky z-50 top-0 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
            <nav className="px-4 py-3 lg:px-6">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-10"
                            alt="Logo"
                        />
                        <span className="hidden text-sm font-bold text-slate-800 sm:block">
                            React Router
                        </span>
                    </Link>

                    <div className="flex items-center gap-2 lg:order-2">
                        <Link
                            to="/contact"
                            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-rose-700 sm:block"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/github"
                            className="rounded-lg bg-rose-700 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-rose-800 focus:ring-2 focus:ring-rose-300"
                        >
                            View GitHub
                        </Link>

                        <button
                            type="button"
                            className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                            // Click par state change hogi, aur menu show/hide hoga.
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:order-1 lg:block lg:w-auto`}>
                        <ul className="mt-4 flex flex-col gap-1 font-medium lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
                            <li>
                                {/* Link click ke baad mobile menu close karna better UX hai. */}
                                <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                                    Contact us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/github" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
