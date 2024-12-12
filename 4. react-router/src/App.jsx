import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductLayout from "./layouts/ProductLayout";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Home />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
