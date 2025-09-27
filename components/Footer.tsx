"use client"

import { useTranslation } from "@/hooks/useTranslation"

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="py-16 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Importantist
            </span>
          </div>

          <div className="flex items-center space-x-6 lg:space-x-8 text-sm text-gray-600">
            <a href="#privacy" className="hover:text-blue-600 transition-smooth font-medium">
              Política de Privacidade
            </a>
            <a href="#terms" className="hover:text-blue-600 transition-smooth font-medium">
              Termos de Uso
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-smooth font-medium">
              Contato
            </a>
          </div>

          <p className="text-sm text-gray-500 font-medium whitespace-nowrap">
            © 2025 Importantist. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
