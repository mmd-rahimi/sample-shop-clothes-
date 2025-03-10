import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

const App = () => {
 

  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:id" element={<ProductDetails/>} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
