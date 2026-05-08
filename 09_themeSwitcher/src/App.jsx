import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  // themeMode state batati hai abhi light theme hai ya dark.
  const [themeMode, setThemeMode] = useState('light')

  // Ye functions context ke through child components ko milenge.
  const lightTheme = () => setThemeMode('light')
  const darkTheme = () => setThemeMode('dark')

  useEffect(() => {
    // Tailwind dark mode class html tag par lagne se poori UI theme change hoti hai.
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    // Provider theme state aur actions ko ThemeButton/Card tak available karta hai.
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                   <ThemeButton />     
            </div>

            <div className="w-full max-w-sm mx-auto">
                   <Card />
            </div>
          </div>
      </div>

    </ ThemeProvider>
  )
}

export default App
