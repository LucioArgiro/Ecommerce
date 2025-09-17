import { useState } from "react";
import { useCartStore } from "../Store/Cartstore";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3 sm:p-4 flex flex-col items-center text-center w-full max-w-[220px] sm:max-w-[240px]">
      {/* Imagen más pequeña */}
      <img
        src={image}
        alt={title}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain mb-3"
      />

      {/* Título */}
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
        {title}
      </h3>

      {/* Precio */}
      <p className="text-blue-600 font-bold text-base sm:text-lg mt-1">
        ${price}
      </p>

      {/* Selector de cantidad */}
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-sm"
        >
          -
        </button>
        <span className="font-semibold text-sm">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-sm"
        >
          +
        </button>
      </div>

      {/* Botón agregar */}
      <button
        onClick={() => addToCart({ id, title, price, image, quantity })}
        className="mt-3 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition text-sm"
      >
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;
