import { Link, useLoaderData } from 'react-router-dom';

function Github(){
    // useLoaderData wahi data read karta hai jo route ke loader ne return kiya.
    // Is component ka kaam ab sirf UI dikhana hai, data fetch karna nahi.
    const data = useLoaderData();

    // Agar loader error object return kare, to normal profile ke bajay error UI dikhayenge.
    if (data.error) {
        return (
            <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-lg border border-rose-200 bg-rose-50 p-6 text-center">
                    <p className="text-sm font-semibold uppercase text-rose-700">GitHub API</p>
                    <h1 className="mt-3 text-2xl font-bold text-rose-950">Could not load profile</h1>
                    <p className="mt-3 text-rose-800">{data.error}</p>
                </div>
            </section>
        )
    }

    // Safety check: agar data abhi available nahi hai to loading UI dikh jaaye.
    if (!data) {
        return (
            <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                    Loading Github profile...
                </div>
            </section>
        )
    }

    return (
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="grid gap-6 p-6 sm:grid-cols-[180px_1fr] sm:p-8">
                    <img
                        src={data.avatar_url}
                        alt={`${data.login} avatar`}
                        className="mx-auto h-36 w-36 rounded-full border-4 border-rose-100 object-cover sm:mx-0"
                    />

                    <div className="text-center sm:text-left">
                        <p className="text-sm font-semibold uppercase text-rose-700">GitHub profile</p>
                        <h1 className="mt-2 text-3xl font-bold text-slate-950">{data.name || data.login}</h1>
                        <p className="mt-2 text-slate-600">@{data.login}</p>

                        {/* Conditional rendering: bio tabhi dikhana jab GitHub se bio aaye. */}
                        {data.bio && <p className="mt-4 max-w-2xl leading-7 text-slate-700">{data.bio}</p>}

                        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                            <div className="rounded-lg bg-slate-50 p-4">
                                <p className="text-2xl font-bold text-slate-950">{data.followers}</p>
                                <p className="mt-1 text-xs font-medium text-slate-500">Followers</p>
                            </div>
                            <div className="rounded-lg bg-slate-50 p-4">
                                <p className="text-2xl font-bold text-slate-950">{data.following}</p>
                                <p className="mt-1 text-xs font-medium text-slate-500">Following</p>
                            </div>
                            <div className="rounded-lg bg-slate-50 p-4">
                                <p className="text-2xl font-bold text-slate-950">{data.public_repos}</p>
                                <p className="mt-1 text-xs font-medium text-slate-500">Repos</p>
                            </div>
                        </div>

                        <Link
                            to={data.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                            Open on GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Github;
