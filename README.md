Descripción general
Aplicación web del banco digital QA Banco Digital, construida con Next.js 16, React 19 y Tailwind CSS 4. Ofrece productos crediticios y un simulador de créditos en tiempo real.
Stack tecnológico
Tecnología	Versión	Uso
Next.js	16.1.6	Framework con App Router
React	19.2.3	UI y componentes
TypeScript	^5	Tipado estático
Tailwind CSS	^4	Estilos y diseño responsive
Geist	(next/font)	Tipografías principal y mono
ESLint	^9	Linting
Estructura del proyecto
bqd-frontend/├── app/                    # App Router de Next.js│   ├── layout.tsx          # Layout raíz con metadata SEO│   ├── page.tsx            # Página principal (Home)│   ├── globals.css         # Estilos globales y variables CSS│   ├── favicon.ico│   └── simulador/│       └── page.tsx        # Página del simulador de créditos├── components/             # Componentes reutilizables│   ├── Header.tsx          # Cabecera con navegación y botón de login│   ├── Footer.tsx          # Pie de página│   ├── LoginModal.tsx      # Modal de inicio de sesión│   ├── ProductoCard.tsx    # Tarjeta de producto de crédito│   ├── ProductosSection.tsx# Sección de catálogo de productos│   ├── FormularioCredito.tsx   # Formulario monto/plazo del simulador│   └── InformationSimulator.tsx# Información del simulador├── public/                 # Assets estáticos├── next.config.ts├── tsconfig.json└── package.json
Funcionalidad detallada
Página principal (/)
Hero
Badge: "Tu banco digital de confianza"
Título: "Financia tus sueños"
Descripción de soluciones financieras
Botones: "Ir al Simulador" y "Ver Productos"
Catálogo de productos
Tres productos de crédito:
Crédito Semilla: $100.000–$500.000 COP, 28% E.A., microcrédito
Crédito Impulso: $500.001–$1.000.000 COP, 24% E.A., consumo medio
Crédito Evolución: $1.000.001–$5.000.000 COP, 19% E.A., preferencial
Sección "Sobre QA Banco Digital"
Texto institucional y descripción de la empresa
CTA final
Título: "¿Listo para solicitar tu crédito?"
Enlace "Ir al Simulador"
Header
Logo "QA Banco Digital"
Navegación: Productos, Nosotros
Botón "Iniciar sesión" que abre el modal de login
Modal de login (LoginModal)
Campos: correo electrónico y contraseña
Botones: Cancelar, Entrar
Comportamiento: simula error 500 al enviar ("Error interno del servidor")
Cierre por Cancelar o clic en overlay
Atributos ARIA para accesibilidad
Página del simulador (/simulador)
Formulario
Monto: $100.000–$5.000.000 COP
Plazo: 1–12 meses
Lógica de cálculo
Producto según rango de monto
Cuota mensual con fórmula de cuota fija
Total a pagar = cuota × plazo
Validaciones
Monto mínimo: $100.000
Monto máximo: $5.000.000
Mensajes de error para montos fuera de rango
Resultados mostrados
Producto asignado (Semilla, Impulso o Evolución)
Tasa E.A. y M.V.
Resumen con cuota mensual, total a pagar y número de cuotas
Información
Sección "Información Importante" con notas sobre tasas, montos y simulación
Diseño y UX
Estilo: gradientes indigo/purple/pink
Soporte modo claro/oscuro con prefers-color-scheme
Responsive para mobile y desktop
Uso de backdrop blur y sombras
Footer fijo con copyright 2026
Scripts disponibles
npm run dev — Servidor de desarrollo (puerto 3000)
npm run build — Build de producción
npm run start — Servidor de producción
npm run lint — ESLint
