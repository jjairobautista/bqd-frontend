import ProductoCard from './ProductoCard';

interface Producto {
  nombre: string;
  tag: string;
  descripcion: string;
  monto: string;
  plazo: string;
  tasaEA: string;
  tasaMV: string;
  publico: string;
  gradient: string;
  bgGradient: string;
  icon: string;
}

interface ProductosSectionProps {
  productos: Producto[];
}

export default function ProductosSection({ productos }: ProductosSectionProps) {
  return (
    <section id="productos" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Catálogo de Productos Financieros
        </h3>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Encuentra el crédito perfecto para tus necesidades. Cada producto está diseñado pensando en ti.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {productos.map((producto, index) => (
          <ProductoCard key={index} producto={producto} />
        ))}
      </div>
    </section>
  );
}