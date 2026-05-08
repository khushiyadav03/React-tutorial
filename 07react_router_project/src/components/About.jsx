export default function About() {
    return (
        <section className="bg-white py-14 sm:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <img
                        className="mx-auto w-full max-w-md"
                        src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                        alt="People building a web app"
                    />
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase text-rose-700">About the project</p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                        This app is a practice space for React fundamentals.
                    </h2>
                    <p className="mt-5 leading-7 text-slate-600">
                        You are learning the right way: by building pages, connecting routes, reading params, using loaders, and handling real API states.
                    </p>
                    <p className="mt-4 leading-7 text-slate-600">
                        Keep each feature small and understandable. When something works, improve it a little: add loading UI, error UI, form validation, or a cleaner reusable component.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <h3 className="font-semibold text-slate-900">What you used</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                React components, React Router routes, nested layout, loader data, and Tailwind classes.
                            </p>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <h3 className="font-semibold text-slate-900">Next skill</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Turn repeated UI like page headings and cards into small reusable components.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
