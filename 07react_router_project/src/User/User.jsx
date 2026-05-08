import { useParams } from 'react-router-dom';

function User() {
    // useParams URL ke dynamic parts read karta hai.
    // Example: /user/khushi me userId ki value "khushi" hogi.
    const { userId } = useParams();

    return (
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-sm font-semibold uppercase text-rose-700">Dynamic route</p>
                <h1 className="mt-3 text-3xl font-bold text-slate-950">User: {userId}</h1>
                <p className="mt-3 text-slate-600">
                    This page reads the value from the URL using <span className="font-semibold">useParams()</span>.
                </p>
            </div>
        </section>
    )
}

export default User;
