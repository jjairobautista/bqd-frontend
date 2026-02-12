'use client';

interface FormularioCreditoProps {
  monto: string;
  plazo: number;
  error: string;
  onMontoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPlazoChange: (plazo: number) => void;
  formatearNumero: (numero: number) => string;
}

export default function FormularioCredito({
  monto,
  plazo,
  error,
  onMontoChange,
  onPlazoChange,
  formatearNumero,
}: FormularioCreditoProps) {
  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Datos del Crédito
        </h2>
      </div>

      <div className="space-y-6">
        {/* Input Monto */}
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
            Monto del Crédito (COP)
          </label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-semibold">$</span>
            <input
              type="text"
              value={monto ? formatearNumero(parseFloat(monto.replace(/[^\d]/g, '')) || 0).replace('COP', '').trim() : ''}
              onChange={onMontoChange}
              placeholder="100.000"
              className={`w-full pl-10 pr-5 py-4 rounded-xl border-2 ${
                error
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-slate-300 dark:border-slate-600 focus:border-indigo-500'
              } bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all`}
            />
          </div>
          {error && (
            <div className="mt-3 flex items-center gap-2 text-red-600 dark:text-red-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
            Rango: $100.000 - $5.000.000 COP
          </p>
        </div>

        {/* Input Plazo */}
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
            Plazo (meses)
          </label>
          <select
            value={plazo}
            onChange={(e) => onPlazoChange(Number(e.target.value))}
            className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((mes) => (
              <option key={mes} value={mes}>
                {mes} {mes === 1 ? 'mes' : 'meses'}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}