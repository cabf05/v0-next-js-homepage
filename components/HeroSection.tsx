"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useTranslation"
import { Play, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 opacity-3">
        <Image
          src="/professional-business-workspace.jpg"
          alt="Professional workspace background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>

      {/* Professional floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-blue-700/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-300/10 to-blue-500/10 rounded-full blur-2xl animate-pulse-glow"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-md">
            <CheckCircle className="h-4 w-4" />
            Sistema de gestão profissional
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="xl" variant="hero" className="group min-w-[200px]">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="hero-outline" className="group min-w-[200px]">
              <Play className="mr-2 h-5 w-5" />
              {t("hero.ctaSecondary")}
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-md border border-gray-100">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
              <span className="font-medium text-gray-700">Teste gratuito de 14 dias</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-md border border-gray-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
              <span className="font-medium text-gray-700">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-md border border-gray-100">
              <div className="w-3 h-3 bg-orange-500 rounded-full shadow-sm"></div>
              <span className="font-medium text-gray-700">Setup em minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
