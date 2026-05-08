import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
                <div>
                    <Link to="/" className="inline-flex items-center gap-3">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-10"
                            alt="Logo"
                        />
                        <span className="text-sm font-bold text-slate-800">React Router Practice</span>
                    </Link>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                        A small project for practicing routing, loaders, forms, and UI states in React.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                    <div>
                        <h2 className="text-sm font-semibold uppercase text-slate-900">Pages</h2>
                        <ul className="mt-4 space-y-3 text-sm font-medium text-slate-500">
                            <li><Link to="/" className="hover:text-rose-700">Home</Link></li>
                            <li><Link to="/about" className="hover:text-rose-700">About</Link></li>
                            <li><Link to="/contact" className="hover:text-rose-700">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase text-slate-900">Practice</h2>
                        <ul className="mt-4 space-y-3 text-sm font-medium text-slate-500">
                            <li><Link to="/github" className="hover:text-rose-700">GitHub Loader</Link></li>
                            <li><Link to="/user/khushi" className="hover:text-rose-700">Dynamic User</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase text-slate-900">External</h2>
                        <ul className="mt-4 space-y-3 text-sm font-medium text-slate-500">
                            <li>
                                <a
                                    href="https://github.com/khushiyadav03"
                                    className="hover:text-rose-700"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://reactrouter.com"
                                    className="hover:text-rose-700"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    React Router Docs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200 px-4 py-4 text-center text-sm text-slate-500">
                © 2026 React Router Practice. Built while learning React.
            </div>
        </footer>
    );
}
