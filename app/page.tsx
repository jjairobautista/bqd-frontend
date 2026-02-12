import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductosSection from "@/components/ProductosSection";
import Link from "next/link";

export default function Home() {
  const productos = [
    {
      nombre: "Crédito Semilla",
      tag: "Micro-crédito de entrada",
      descripcion: "Diseñado para usuarios que buscan financiamiento rápido de bajo monto. Es el que posee el riesgo más alto y, por ende, la tasa más alta.",
      monto: "$100.000 COP a $500.000 COP",
      plazo: "Desde 1 hasta 12 meses",
      tasaEA: "28% E.A.",
      tasaMV: "~2.08% M.V.",
      publico: "Usuarios sin historial crediticio o necesidades inmediatas de liquidez",
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30",
      icon: "🌱",
    },
    {
      nombre: "Crédito Impulso",
      tag: "Consumo de rango medio",
      descripcion: "El producto estrella para usuarios con ingresos estables que buscan financiar compras o servicios medianos.",
      monto: "$500.001 COP a $1.000.000 COP",
      plazo: "Desde 1 hasta 12 meses",
      tasaEA: "24% E.A.",
      tasaMV: "~1.81% M.V.",
      publico: "Empleados o independientes con ingresos desde 1 SMMLV",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      icon: "🚀",
    },
    {
      nombre: "Crédito Evolución",
      tag: "Crédito Preferencial",
      descripcion: "El producto premium del portafolio. Ofrece la tasa más competitiva para incentivar montos mayores, captando clientes de mayor perfil financiero.",
      monto: "$1.000.001 COP a $5.000.000 COP",
      plazo: "Desde 1 hasta 12 meses",
      tasaEA: "19% E.A.",
      tasaMV: "~1.46% M.V.",
      publico: "Clientes con capacidad de endeudamiento comprobada y buen comportamiento de pago",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
      icon: "⭐",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
     
      <Header/>
     
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                💳 Tu banco digital de confianza
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Financia tus{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                sueños
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Soluciones financieras innovadoras diseñadas para impulsar tus proyectos y hacer crecer tus ideas con las mejores condiciones del mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/simulador"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl text-lg shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ir al Simulador
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <a
                href="#productos"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Productos
              </a>
            </div>
          </div>
        </div>
      </section>

     <ProductosSection productos={productos} />

      {/* Sección Nosotros Moderna */}
      <section id="nosotros" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="text-center mb-10">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                Sobre QA Banco Digital
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">QA Banco Digital</span> es una institución financiera innovadora comprometida con brindar soluciones crediticias accesibles y transparentes para todos los colombianos.
              </p>
              <p>
                Nuestro portafolio de productos está diseñado para cubrir las necesidades de diferentes perfiles de clientes, desde aquellos que dan sus primeros pasos en el mundo crediticio hasta aquellos con mayor experiencia y capacidad de endeudamiento.
              </p>
              <p>
                Trabajamos con tecnología de punta para ofrecerte procesos rápidos, seguros y transparentes. Nuestro simulador de créditos te permite conocer en tiempo real las condiciones de tu préstamo antes de solicitarlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Moderno */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 relative z-10">
              ¿Listo para solicitar tu crédito?
            </h3>
            <p className="text-xl md:text-2xl mb-10 opacity-95 relative z-10">
              Simula tu crédito ahora y descubre las mejores condiciones para ti
            </p>
            <Link
              href="/simulador"
              className="inline-block relative z-10 bg-white text-indigo-600 font-bold px-10 py-5 rounded-xl text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Ir al Simulador
              <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


     <Footer/>

    </div>
  );
}