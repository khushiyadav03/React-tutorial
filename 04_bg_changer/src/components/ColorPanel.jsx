import CopyButton from "./CopyButton";


const ColorPanel = ({
    bgColor,
    changeColor,
    copyColor,
    copied,
}) => {
    return (
        // bgColor + "66" same color ko transparent panel background banata hai.
        <div
            className="w-full max-w-sm rounded-3xl border border-white/35 bg-white/20 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl flex flex-col items-center gap-5"
            style={{backgroundColor : bgColor + "66" }}
        >
            <h1 className="text-2xl font-bold tracking-wide text-white drop-shadow-sm">
                Color Generator
            </h1>

            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-black/15 px-4 py-3 text-white shadow-inner w-full">
                <span className="font-mono text-base font-semibold uppercase tracking-wider">{bgColor}</span>
                <CopyButton onCopy={copyColor} />
            </div>

            {copied && <span className="text-xs font-medium text-white/90">Copied!</span>}

            {/* Button parent se aaya function call karke color state change karata hai. */}
            <button 
            onClick={changeColor}
            className="w-full rounded-2xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-transparent">
                Change Color
            </button>
        </div>
    );
};

export default ColorPanel;
