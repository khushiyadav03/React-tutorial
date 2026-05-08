import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // Options ko state me rakhne se UI aur password dono sync rehte hain.
  const [length, setLength] = useState(8)
  const [includedNum, setNumberAllow] = useState(false)
  const [includedChar, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  // useRef input DOM element ko directly access karne ke liye hai.
  const passwrodRef = useRef(null)

  const passwordGenerater = useCallback(() => {
    // useCallback function ko memoize karta hai, dependency change par hi naya function banta hai.
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (includedNum) {
      str += "0123456789"
    }
    if (includedChar) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [length, includedNum, includedChar, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    // ref.current se input select kar rahe hain, bina extra state ke.
    passwrodRef.current?.select()
    passwrodRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    // Dependency change hote hi password regenerate hota hai.
    // This tutorial app regenerates the password whenever one option changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerater()
  }, [passwordGenerater])


  return (
    <>
      <main className='min-h-screen w-full px-4 py-8 sm:px-6'>
        <div className='mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center'>
          <section className='password-card w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur sm:p-8'>
            <div className='mb-8 text-left'>
              <span className='eyebrow mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]'>
                Secure Utility
              </span>
              <h1 className='text-3xl font-bold text-slate-950 sm:text-4xl'>Password Generator</h1>
              <p className='mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base'>
                Create a quick password and tune its length, numbers, and symbols in one clean panel.
              </p>
            </div>

            {/* password display and copy button  */}
            <div className='mb-7 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-inner sm:flex-row sm:items-center'>
              <input
                type='text'
                value={password}
                className='min-w-0 flex-1 bg-transparent px-2 py-3 font-mono text-lg font-semibold tracking-wide text-slate-900 outline-none placeholder:text-slate-400 sm:text-xl'
                placeholder='Your Password'
                readOnly
                ref={passwrodRef}
                aria-label='Generated password'
              />
              <button
                onClick={copyPasswordToClipboard}
                className='shrink-0 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 active:translate-y-0'
              >
                Copy
              </button>
            </div>


            <div className='grid gap-4 text-sm sm:grid-cols-2'>

              {/* password ki length set karenge  */}
              <div className='control-panel sm:col-span-2'>
                <div className='mb-3 flex items-center justify-between gap-3'>
                  <label className='font-semibold text-slate-800' htmlFor='password-length'>
                    Password length
                  </label>
                  <span className='rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white'>
                    {length}
                  </span>
                </div>
                <input
                  id='password-length'
                  type="range"
                  min={8}
                  max={30}
                  value={length}
                  className='accent-range w-full cursor-pointer'
                  onChange={(e) => { setLength(Number(e.target.value)) }} />
              </div>

              {/* if inlcude num or not */}
              <label className='option-tile'>
                <input
                  type='checkbox'
                  defaultChecked={includedNum}
                  onChange={() => { setNumberAllow((prev) => !prev) }} />
                <span>
                  <strong>Numbers</strong>
                  <small>0-9 digits</small>
                </span>
              </label>

              {/* if inlcude char or not  */}
              <label className='option-tile'>
                <input
                  type='checkbox'
                  defaultChecked={includedChar}
                  onChange={() => { setCharAllow((prev) => !prev) }} />
                <span>
                  <strong>Symbols</strong>
                  <small>! @ # $ and more</small>
                </span>
              </label>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
