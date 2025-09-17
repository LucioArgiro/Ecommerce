import { Link } from "react-router-dom";
import { useCartStore } from "../Store/Cartstore";

const Navbar = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  const buttonStyle =
    "bg-white text-[#162C78] px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition flex items-center gap-2";

  return (
    <nav className="bg-[#162C78] shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <li className="list-none">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          Raza
        </Link>
      </li>

      {/* Menú */}
      <ul className="flex gap-6 font-medium items-center">
        <li>
          <Link to="/">
            <button className={buttonStyle}>Inicio</button>
          </Link>
        </li>
        <li>
          <Link to="/productos">
            <button className={buttonStyle}>Productos</button>
          </Link>
        </li>
        <li className="relative">
          <Link to="/carrito">
            <button className={buttonStyle}>
              🛒 Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
