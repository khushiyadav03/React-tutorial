import { useState } from 'react';

export default function Contact() {
    // Ye state sirf submit ke baad success message dikhane ke liye hai.
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // preventDefault page reload ko rokta hai, React app same page par rehti hai.
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="mx-auto grid min-h-[calc(100vh-160px)] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase text-rose-700">Contact</p>
                <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                    Send a quick message
                </h1>
                <p className="mt-4 leading-7 text-slate-600">
                    This form is a good place to practice controlled inputs, validation, and submit handling in React.
                </p>

                <div className="mt-8 space-y-5 text-slate-700">
                    <div>
                        <p className="text-sm font-semibold text-slate-950">Location</p>
                        <p className="mt-1 text-sm">New Delhi, India</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-950">Phone</p>
                        <p className="mt-1 text-sm">+91 98765 43210</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-950">Email</p>
                        <p className="mt-1 text-sm">hello@example.com</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                {/* Conditional rendering: state true hogi tabhi ye message dikhega. */}
                {isSubmitted && (
                    <div className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                        Thanks! Your demo form was submitted successfully.
                    </div>
                )}

                <div>
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Full name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        required
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-800 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-800 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Write your message"
                        required
                        className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-800 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-5 w-full rounded-lg bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800 focus:ring-2 focus:ring-rose-300 sm:w-auto"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
