import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Pages/Home";
import Productos from "./assets/Pages/Productos";
import Carrito from "./assets/Pages/Carrito";
import Checkout from "./assets/Pages/Checkout";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar/>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/carrito" element={<Carrito/>} />
           <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <footer className="bg-white shadow-inner py-4 text-center text-gray-500">
        © {new Date().getFullYear()} Mi Ecommerce
      </footer>
    </div>
  );
}

export default App;
