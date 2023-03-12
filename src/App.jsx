import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="App h-screen bg-purple bg-gradient-to-b from-dark via-dark">
      <div className="header">
        <Navbar />
      </div>
      <div className="cards-container flex p-1 m-4 grid-cols-2 gap-4 justify-center items-center">
        <Card name="Typescript Shopping Cart" topic="Context" repoName="cart-typescript"/>
        <Card name="Celebrity News Feed" topic="Infinite scroll" repoName="news-feed"/>
      </div>
    </div>
  )
}

export default App
