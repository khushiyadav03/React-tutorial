import { useColor } from "./Hook/useColor";
import ColorPanel from './components/ColorPanel'

function App() {
  // Custom hook color wali state aur actions ko App se cleanly separate rakhta hai.
  const { bgColor, changeColor, copyColor, copied } = useColor();

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center px-4 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: bgColor }}
      >

        {/* Parent se child ko state aur functions props ke through mil rahe hain. */}
        <ColorPanel
        bgColor={bgColor}
        changeColor={changeColor}
        copyColor={copyColor}
        copied={copied}
        >
        </ColorPanel>
      </div>
    </>
  );
}

export default App
