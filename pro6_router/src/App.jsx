import About from "./comp/About"
import Contact from "./comp/Contact"
import Error404 from "./comp/Error404"
import Header from "./comp/Header"
import Home from "./comp/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App