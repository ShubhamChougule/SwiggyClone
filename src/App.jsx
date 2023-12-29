import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Help from "./components/pages/Help";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/help" element={<Help />} />
        <Route path="/checkout" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
