import {BrowserRouter as Router,  Routes, Route} from "react-router-dom"
import MiniHeader from "./components/MiniHeader"
import Header from "./components/Header"
import Home from "./Pages/Home"
const App = () => {
  return (
    <div>
      <Router>
        <MiniHeader/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </Router>      
    </div>
  )
}

export default App
