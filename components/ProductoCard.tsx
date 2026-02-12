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
  
  interface ProductoCardProps {
    producto: Producto;
  }
  
  export default function ProductoCard({ producto }: ProductoCardProps) {
    return (
      <div
        className={`group relative bg-gradient-to-br ${producto.bgGradient} rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}
      >
        {/* Efecto de brillo al hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${producto.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Icono */}
        <div className="mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${producto.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {producto.icon}
          </div>
          <span className="inline-block px-3 py-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">
            {producto.tag}
          </span>
          <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {producto.nombre}
          </h4>
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
          {producto.descripcion}
        </p>
  
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${producto.gradient} mt-2 flex-shrink-0`}></div>
            <div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">Rango de Monto:</p>
              <p className="text-slate-900 dark:text-white font-bold">{producto.monto}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${producto.gradient} mt-2 flex-shrink-0`}></div>
            <div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">Plazo de Pago:</p>
              <p className="text-slate-900 dark:text-white font-bold">{producto.plazo}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${producto.gradient} mt-2 flex-shrink-0`}></div>
            <div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">Tasa de Interés:</p>
              <p className={`text-2xl font-extrabold bg-gradient-to-r ${producto.gradient} bg-clip-text text-transparent`}>
                {producto.tasaEA}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">({producto.tasaMV})</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${producto.gradient} mt-2 flex-shrink-0`}></div>
            <div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">Público Objetivo:</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{producto.publico}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }