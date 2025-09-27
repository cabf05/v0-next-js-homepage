"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Check, Heart, Star } from "lucide-react"

export const PricingSection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t("pricing.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Escolha o plano ideal para suas necessidades</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Individual Plan */}
          <div className="bg-white rounded-3xl p-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden group">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-md">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">{t("pricing.individual.title")}</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-green-600">{t("pricing.individual.price")}</span>
              </div>
              <p className="text-gray-600 text-lg">{t("pricing.individual.desc")}</p>
            </div>

            <div className="space-y-4 mb-10 text-left">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Atividades ilimitadas</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Gestão de recorrências</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Importação via Excel</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Visão diária e mensal</span>
              </div>
            </div>

            <Button className="w-full" size="xl" variant="hero">
              {t("hero.cta")}
            </Button>
          </div>

          {/* Teams Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center relative overflow-hidden group text-white">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Star className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="absolute top-6 left-6">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">POPULAR</div>
            </div>

            <div className="mb-8 mt-4">
              <h3 className="text-3xl font-bold mb-4">{t("pricing.teams.title")}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{t("pricing.teams.price")}</span>
              </div>
              <p className="text-blue-100 text-lg">{t("pricing.teams.desc")}</p>
            </div>

            <div className="space-y-4 mb-10 text-left">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">Tudo do plano individual</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">Biblioteca de atividades por função</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">Gestão de equipes</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">Onboarding automático</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">Relatórios e analytics</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-white text-blue-600 hover:bg-gray-50 border-2 border-white"
              size="xl"
            >
              Entrar em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
