import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div className="order-2 lg:order-1">
                <p className="mb-3 text-sm font-semibold uppercase text-rose-700">
                    Learning by building
                </p>
                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                    A small React Router project with real pages and API data.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                    Explore routing, layouts, dynamic params, loaders, forms, and reusable components in one beginner-friendly project.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                        className="inline-flex items-center justify-center rounded-lg bg-rose-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-800"
                        to="/github"
                    >
                        View GitHub Profile
                    </Link>
                    <Link
                        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700"
                        to="/about"
                    >
                        Learn About This App
                    </Link>
                </div>

                <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
                    <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <p className="text-2xl font-bold text-slate-950">5</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">Routes</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <p className="text-2xl font-bold text-slate-950">1</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">Loader</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <p className="text-2xl font-bold text-slate-950">API</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">GitHub</p>
                    </div>
                </div>
            </div>

            <div className="order-1 rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:order-2">
                <img
                    className="mx-auto w-full max-w-md"
                    src="https://i.ibb.co/2M7rtLk/Remote1.png"
                    alt="React learning illustration"
                />
            </div>
        </section>
    );
}
