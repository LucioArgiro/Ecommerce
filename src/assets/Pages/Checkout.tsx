const Checkout = () => {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Finalizar Compra</h2>

      <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            placeholder="Juan Pérez"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Dirección de envío
          </label>
          <textarea
            placeholder="Calle 123, Ciudad"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
