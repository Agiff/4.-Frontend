import { Route, BrowserRouter as Router, Routes } from "react-router";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
