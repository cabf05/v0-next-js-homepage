"use client"

import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/LanguageSelector"
import { useTranslation } from "@/hooks/useTranslation"

export const Navbar = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()

  return (
    <nav className="fixed top-0 w-full glass-effect border-b border-white/20 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Importantist
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-smooth font-medium">
              {t("nav.features")}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-smooth font-medium">
              {t("nav.pricing")}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-smooth font-medium">
              {t("nav.contact")}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={changeLanguage} />
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              {t("nav.login")}
            </Button>
            <Button size="sm" className="shadow-elegant hover:shadow-lg">
              {t("nav.signup")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
