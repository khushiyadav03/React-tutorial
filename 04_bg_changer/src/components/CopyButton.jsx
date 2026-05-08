const CopyButton = ({ onCopy }) => {
    return (
        // Reusable button: copy ka actual logic parent/custom hook me hai.
        <button
            onClick={onCopy}
            aria-label="Copy Color Code"
            className = "rounded-full border border-white/25 px-3 py-1.5 text-sm font-medium text-white/95 transition hover:bg-white/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/70">
                Copy
        </button>
    );
}

export default CopyButton;
