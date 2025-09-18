import { Link } from "react-router-dom";
import { useCartStore } from "../Store/Cartstore"
const Navbar = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <nav className="bg-[#162C78] shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-poppins font-bold text-white">
          Raza
        </span>
      </Link>

      {/* Menú */}
      <ul className="flex gap-4 text-white font-inter font-medium items-center">
        <li>
          <Link
            to="/"
            className="bg-white text-[#162C78] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/productos"
            className="bg-white text-[#162C78] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Productos
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/carrito"
            className="bg-white text-[#162C78] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
          >
            🛒 Carrito
            {totalItems > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
