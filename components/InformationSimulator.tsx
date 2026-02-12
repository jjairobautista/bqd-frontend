import Link from "next/link";

interface InformationSimulatorProps {
    showBackButton?: boolean;
    backHref?: string;
}

export default function InformationSimulator({ showBackButton = false, backHref = '/' }: InformationSimulatorProps) {
    return (
        <div className="mt-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          Información Importante
        </h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
            <span>La tasa de interés se determina automáticamente según el monto solicitado.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
            <span>El monto máximo permitido es $5.000.000 COP.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
            <span>La simulación es una estimación. Las condiciones finales pueden variar según evaluación crediticia.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
            <span>Al ingresar exactamente $500.001, el sistema cambiará automáticamente de Crédito Semilla a Crédito Impulso.</span>
          </li>
        </ul>
      </div>
    )}
    