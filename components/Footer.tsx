 import Link from "next/link";

 interface FooterProps {
    showBackButton?: boolean;
    backHref?: string;
 }

 export default function Footer({ showBackButton = false, backHref = '/' }: FooterProps) {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">QA</span>
              </div>
              <p className="text-xl font-bold text-white">QA Banco Digital</p>
            </div>
            <p className="text-sm text-slate-400">© 2026 QA Banco Digital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
 }