# QA Banco Digital - Frontend

Aplicación web del banco digital **QA Banco Digital**, construida con Next.js 16, React 19 y Tailwind CSS 4. Ofrece un catálogo de productos crediticios y un simulador de créditos en tiempo real.

## Stack Tecnológico

| Tecnología        | Versión | Uso                        |
|-------------------|---------|----------------------------|
| **Next.js**       | 16.1.6  | Framework con App Router   |
| **React**         | 19.2.3  | UI y componentes           |
| **TypeScript**    | ^5      | Tipado estático            |
| **Tailwind CSS**  | ^4      | Estilos y diseño responsive|
| **Geist**         | (next/font) | Tipografías           |
| **ESLint**        | ^9      | Linting                    |

## Estructura del Proyecto

```
bqd-frontend/
├── app/                      # App Router de Next.js
│   ├── layout.tsx            # Layout raíz con metadata SEO
│   ├── page.tsx              # Página principal (Home)
│   ├── globals.css           # Estilos globales y variables CSS
│   ├── favicon.ico
│   └── simulador/
│       └── page.tsx          # Página del simulador de créditos
├── components/               # Componentes reutilizables
│   ├── Header.tsx            # Cabecera con navegación y login
│   ├── Footer.tsx            # Pie de página
│   ├── LoginModal.tsx        # Modal de inicio de sesión
│   ├── ProductoCard.tsx      # Tarjeta de producto de crédito
│   ├── ProductosSection.tsx  # Sección de catálogo
│   ├── FormularioCredito.tsx # Formulario monto/plazo
│   └── InformationSimulator.tsx # Información del simulador
├── public/                   # Assets estáticos
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Funcionalidad

### Página Principal (`/`)

- **Hero**: Badge "Tu banco digital de confianza", título "Financia tus sueños", descripción
- **Catálogo de productos**: Tres productos crediticios con descripción detallada
- **Sección "Sobre QA Banco Digital"**: Información institucional
- **CTA final**: Llamada a acción "Ir al Simulador"

### Productos de Crédito

| Producto              | Rango de Monto                | Tasa E.A. | Descripción                    |
|-----------------------|-------------------------------|-----------|--------------------------------|
| **Crédito Semilla**   | $100.000 - $500.000 COP       | 28%       | Micro-crédito de entrada       |
| **Crédito Impulso**   | $500.001 - $1.000.000 COP     | 24%       | Consumo de rango medio         |
| **Crédito Evolución** | $1.000.001 - $5.000.000 COP   | 19%       | Crédito preferencial           |

### Simulador (`/simulador`)

- **Formulario**: Monto ($100.000 - $5.000.000 COP) y plazo (1-12 meses)
- **Cálculo en tiempo real**: Cuota mensual según fórmula de cuota fija
- **Producto automático**: Se asigna según el rango del monto ingresado
- **Validaciones**: Monto mínimo y máximo con mensajes de error

### Modal de Login

- Campos de correo y contraseña
- Simula error 500 del servidor al enviar
- Accesibilidad con atributos ARIA

## Getting Started

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Diseño

- Gradientes en tonos indigo, purple y pink
- Soporte para modo claro/oscuro (`prefers-color-scheme`)
- Diseño responsive (mobile y desktop)
- Componentes con backdrop blur y sombras
- Footer fijo con copyright 2026

## Deploy en Vercel

La forma más sencilla de desplegar es usar [Vercel](https://vercel.com/new):

1. Importa el repositorio desde GitHub
2. Vercel detectará Next.js automáticamente
3. Deploy con un clic

Documentación: [Next.js - Deploying](https://nextjs.org/docs/app/building-your-application/deploying)
