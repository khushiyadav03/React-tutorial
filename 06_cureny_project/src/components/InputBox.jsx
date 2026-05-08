import { useId } from 'react';


function InputBox({
    label,
    amount, 
    onAmountChange,
    onCurrencyChange,
    currenyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
    // useId label aur input ko unique id se connect karta hai.
    const amountInputId = useId()

    return (
        <div className={`flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 ${className}`}>
            <div className="min-w-0 flex-1">
                <label htmlFor={amountInputId} className="mb-2 inline-block font-medium text-slate-500">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full bg-transparent py-1 text-2xl font-semibold text-slate-950 outline-none placeholder:text-slate-300 disabled:text-slate-500"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    // Controlled input: value parent state se aa rahi hai.
                    value={amount}
                    // Callback optional hai, isliye call karne se pehle check.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="flex min-w-[8rem] flex-col items-end">
                <p className="mb-2 font-medium text-slate-500">Currency</p>
                <select
                    className="max-w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-semibold text-slate-900 outline-none transition hover:bg-slate-100 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:text-slate-400"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    // Select change parent ko batata hai ki currency update karo.
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                        {currenyOptions.map((currency) => (
                            // key se React ko list items track karna easy hota hai.
                            <option key = {currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
