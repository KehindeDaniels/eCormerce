import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
