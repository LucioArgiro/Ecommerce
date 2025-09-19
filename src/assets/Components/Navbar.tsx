import { Link } from "react-router-dom";
import { useCartStore } from "../Store/Cartstore";
import { AiFillHome, AiOutlineAppstore, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <nav className="bg-[#162C78] shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-poppins font-bold text-white">Raza</span>
      </Link>

      {/* Menú con íconos */}
      <ul className="flex gap-6 text-white font-inter font-medium items-center text-2xl">
        <li>
          <Link to="/" className="hover:text-gray-300 transition">
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link to="/productos" className="hover:text-gray-300 transition">
            <AiOutlineAppstore />
          </Link>
        </li>
        <li className="relative">
          <Link to="/carrito" className="hover:text-gray-300 transition flex items-center">
            <AiOutlineShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
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
