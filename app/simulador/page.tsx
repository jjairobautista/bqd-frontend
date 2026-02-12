'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import FormularioCredito from '@/components/FormularioCredito';
import InformationSimulator from '@/components/InformationSimulator';

interface Producto {
  nombre: string;
  tag: string;
  minMonto: number;
  maxMonto: number;
  tasaEA: number;
  tasaMV: number;
  gradient: string;
  bgGradient: string;
  icon: string;
}

export default function Simulador() {
  const [monto, setMonto] = useState<string>('');
  const [plazo, setPlazo] = useState<number>(12);
  const [productoActual, setProductoActual] = useState<Producto | null>(null);
  const [cuotaMensual, setCuotaMensual] = useState<number | null>(null);
  const [totalPagar, setTotalPagar] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const productos: Producto[] = [
    {
      nombre: 'Crédito Semilla',
      tag: 'Micro-crédito de entrada',
      minMonto: 100000,
      maxMonto: 500000,
      tasaEA: 28,
      tasaMV: 2.08,
      gradient: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30',
      icon: '🌱',
    },
    {
      nombre: 'Crédito Impulso',
      tag: 'Consumo de rango medio',
      minMonto: 500001,
      maxMonto: 1000000,
      tasaEA: 24,
      tasaMV: 1.81,
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      icon: '🚀',
    },
    {
      nombre: 'Crédito Evolución',
      tag: 'Crédito Preferencial',
      minMonto: 1000001,
      maxMonto: 5000000,
      tasaEA: 19,
      tasaMV: 1.46,
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
      icon: '⭐',
    },
  ];

  const determinarProducto = (montoNum: number): Producto | null => {
    if (montoNum < productos[0].minMonto) return null;
    if (montoNum > productos[2].maxMonto) return null;
    
    for (const producto of productos) {
      if (montoNum >= producto.minMonto && montoNum <= producto.maxMonto) {
        return producto;
      }
    }
    return null;
  };

  const calcularCuota = (montoNum: number, plazoNum: number, tasaEA: number): number => {
    const tasaMensual = Math.pow(1 + tasaEA / 100, 1 / 12) - 1;
    
    if (tasaMensual === 0) {
      return montoNum / plazoNum;
    }
    
    const factor = Math.pow(1 + tasaMensual, plazoNum);
    const cuota = montoNum * (tasaMensual * factor) / (factor - 1);
    
    return Math.round(cuota);
  };

  useEffect(() => {
    const montoNum = parseFloat(monto.replace(/[^\d]/g, '')) || 0;
    
    if (montoNum === 0) {
      setProductoActual(null);
      setCuotaMensual(null);
      setTotalPagar(null);
      setError('');
      return;
    }

    if (montoNum < 100000) {
      setError('El monto mínimo es $100.000 COP');
      setProductoActual(null);
      setCuotaMensual(null);
      setTotalPagar(null);
      return;
    }

    if (montoNum > 5000000) {
      setError('El monto máximo permitido es $5.000.000 COP');
      setProductoActual(null);
      setCuotaMensual(null);
      setTotalPagar(null);
      return;
    }

    setError('');
    const producto = determinarProducto(montoNum);
    setProductoActual(producto);

    if (producto) {
      const cuota = calcularCuota(montoNum, plazo, producto.tasaEA);
      setCuotaMensual(cuota);
      setTotalPagar(cuota * plazo);
    } else {
      setCuotaMensual(null);
      setTotalPagar(null);
    }
  }, [monto, plazo]);

  const formatearNumero = (numero: number): string => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numero);
  };

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value.replace(/[^\d]/g, '');
    const montoNum = parseFloat(valor);
    
    if (montoNum > 5000000) {
      return;
    }
    
    setMonto(valor);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <Header/>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                💰 Calcula tu crédito
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
              Simulador de Créditos
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ingresa el monto y plazo deseado para conocer tu cuota mensual en tiempo real
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <FormularioCredito
              monto={monto}
              plazo={plazo}
              error={error}
              onMontoChange={handleMontoChange}
              onPlazoChange={setPlazo}
              formatearNumero={formatearNumero}
            />

           

            {/* Resultados */}
            <div className="space-y-6">
              {/* Producto Seleccionado */}
              {productoActual && (
                <div className={`bg-gradient-to-br ${productoActual.bgGradient} border-2 border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-500`}>
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${productoActual.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                        {productoActual.icon}
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                          {productoActual.tag}
                        </span>
                        <h3 className={`text-2xl md:text-3xl font-extrabold bg-gradient-to-r ${productoActual.gradient} bg-clip-text text-transparent`}>
                          {productoActual.nombre}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                      <span className="text-slate-600 dark:text-slate-400 font-semibold">Tasa de Interés:</span>
                      <span className={`text-xl font-extrabold bg-gradient-to-r ${productoActual.gradient} bg-clip-text text-transparent`}>
                        {productoActual.tasaEA}% E.A.
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                      <span className="text-slate-600 dark:text-slate-400 font-semibold">Tasa Mensual:</span>
                      <span className="text-slate-900 dark:text-white font-bold">
                        ~{productoActual.tasaMV}% M.V.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Resumen de Cuota */}
              {cuotaMensual && (
                <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold">Resumen de tu Crédito</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/30">
                        <span className="text-indigo-100 font-semibold text-lg">Cuota Mensual:</span>
                        <span className="text-3xl font-extrabold">
                          {formatearNumero(cuotaMensual)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/30">
                        <span className="text-indigo-100 font-semibold">Total a Pagar:</span>
                        <span className="text-2xl font-bold">
                          {totalPagar ? formatearNumero(totalPagar) : '-'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-indigo-100 font-semibold">Número de Cuotas:</span>
                        <span className="text-xl font-bold">{plazo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mensaje cuando no hay producto */}
              {!productoActual && monto && !error && (
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-900 rounded-3xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <p className="text-yellow-800 dark:text-yellow-300 font-medium">
                      Ingresa un monto válido para ver las condiciones de tu crédito
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Información adicional */}
        <InformationSimulator/>

        </div>
      </div>
    </div>
  );
}