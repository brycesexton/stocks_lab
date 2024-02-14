import { Route, Routes } from "react-router-dom"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Stock from "./pages/Stocks/Stocks"
// import Nav from "./components/Nav/Nav"

export default function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stocks/:symbol" element={<Stocks/>}/>
    </Routes>
    </div>
  )
}