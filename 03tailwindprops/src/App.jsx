import './App.css'
import Card from './components/Card';

function App() {
  return (
    <>
    <h1>Hello React!</h1>
    
    {/* Props child component ko custom data bhejne ka simple tareeka hai. */}
    <Card username="Muskan"/>
    <Card username="Khushi" btnText="Get started"/>
    </>
  )
}

export default App
