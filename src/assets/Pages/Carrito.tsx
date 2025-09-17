import { useCartStore } from "../Store/Cartstore";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const navigate = useNavigate();

  const totalGeneral = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Tu Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">El carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-blue-600 font-bold">
                    ${item.price} x {item.quantity}
                  </p>
                  <p className="text-gray-700">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          ))}

          {/* Total General */}
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mt-6">
            <h3 className="text-xl font-bold">Total General:</h3>
            <p className="text-2xl font-bold text-green-600">
              ${totalGeneral.toFixed(2)}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={clearCart}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Vaciar carrito
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
