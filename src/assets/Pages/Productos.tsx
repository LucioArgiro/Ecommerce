import ProductCard from "../Components/Productcard";

import Producto1 from "../image/Producto1.jpg";
import Producto2 from "../image/Producto2.jpg";
import Producto3 from "../image/Producto3.jpg";

const Productos = () => {
  const productos = [
    {
      id: 1,
      title: "Trigo Inflado",
      price: 4900,
      image: Producto1,
    },
    {
      id: 2,
      title: "Tostaditas de Arroz",
      price: 2000,
      image: Producto2,
    },
    {
      id: 3,
      title: "Maiz Inflado",
      price: 5000,
      image: Producto3,
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-8">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos.map((p) => (
          <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image}  />
        ))}
      </div>
    </div>
  );
};

export default Productos;
