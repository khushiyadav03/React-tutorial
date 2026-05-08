import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrenyInfo from './hooks/usecurrencyinfo'

const backgroundImage =
  "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg";

function App() {
  // UI ko update karne wali main values state me rakhi hain.
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Custom hook current "from" currency ka rate data fetch karke deta hai.
  const currencyInfo = useCurrenyInfo(from);

  // API object ki keys hi dropdown ke currency options banengi.
  const options = Object.keys(currencyInfo);
  const isRateReady = Boolean(currencyInfo[to]);

  const swap = () => {
    // From/To ke saath amounts bhi swap, taki UI same context me rahe.
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () =>{
    // API data ready nahi hai to calculation avoid karo.
    if (!isRateReady) return;

    // Selected "to" currency ka rate object se nikal ke multiply kar rahe hain.
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 py-10 text-slate-950"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
            }}
        >
            <div className="flex min-h-[calc(100vh-5rem)] w-full items-center justify-center">
                <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/30 bg-white/85 shadow-2xl shadow-slate-950/25 backdrop-blur-md">
                    <div className="border-b border-slate-200/80 px-6 py-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                            Currency converter
                        </p>
                        <h1 className="mt-2 text-3xl font-bold text-slate-950">
                            Convert money fast
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Choose currencies, enter an amount, and get the latest available exchange rate.
                        </p>
                    </div>
                    <form
                        className="space-y-5 p-6"
                        onSubmit={(e) => {
                            // Form submit page reload karta hai, React app me usko rokna zaroori hai.
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currenyOptions={options}
                                // Child input me change hoga, parent state yahan update hogi.
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative flex items-center justify-center">
                            <div className="absolute h-px w-full bg-slate-200" />
                            <button
                                type="button"
                                className="relative grid h-11 w-11 place-items-center rounded-full border border-blue-100 bg-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onClick={swap}
                                aria-label="Swap currencies"
                            >
                                ⇅
                            </button>
                        </div>
                        <div className="w-full">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currenyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                // Result field editable nahi chahiye, sirf converted value show hogi.
                                amountDisable
                            />
                        </div>
                        <div className="rounded-xl bg-slate-950 px-4 py-3 text-sm text-white">
                            <span className="text-slate-300">Rate</span>
                            <span className="ml-2 font-semibold">
                                {isRateReady
                                    ? `1 ${from.toUpperCase()} = ${currencyInfo[to].toFixed(4)} ${to.toUpperCase()}`
                                    : "Loading..."}
                            </span>
                        </div>
                        <button
                            type="submit"
                            disabled={!isRateReady}
                            className="w-full rounded-xl bg-blue-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
