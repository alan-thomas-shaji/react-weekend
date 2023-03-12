import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="App h-screen bg-purple bg-gradient-to-b from-dark via-dark">
      <div className="header">
        <Navbar />
        <Card />
      </div>
    </div>
  )
}

export default App
