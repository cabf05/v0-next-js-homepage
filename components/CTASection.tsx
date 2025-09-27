"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useTranslation"
import { ArrowRight, Sparkles } from "lucide-react"

export const CTASection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 md:p-20 text-center overflow-hidden shadow-2xl">
          {/* Professional background decoration */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="h-4 w-4" />
              Comece hoje mesmo
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">{t("cta.title")}</h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto text-pretty">{t("cta.subtitle")}</p>

            <Button
              size="xl"
              variant="outline"
              className="group bg-white text-blue-600 hover:bg-gray-50 border-2 border-white shadow-lg hover:shadow-xl"
            >
              {t("cta.button")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
