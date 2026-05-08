import Chai from "./chai.jsx"

// App main component hai; yahi se child components compose hote hain.
function App(){
  return(
    // Fragment extra div banaye bina multiple elements return karne deta hai.
    <>
    <Chai/>
    <p>Chai banate h</p>
    </>
  )
}

export default App
