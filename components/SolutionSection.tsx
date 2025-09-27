"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { CheckCircle, Calendar, RotateCcw, FileSpreadsheet, Users } from "lucide-react"

export const SolutionSection = () => {
  const { t } = useTranslation()

  const solutions = [
    {
      icon: Calendar,
      title: t("solution.item1.title"),
      description: t("solution.item1.desc"),
    },
    {
      icon: RotateCcw,
      title: t("solution.item2.title"),
      description: t("solution.item2.desc"),
    },
    {
      icon: FileSpreadsheet,
      title: t("solution.item3.title"),
      description: t("solution.item3.desc"),
    },
    {
      icon: Users,
      title: t("solution.item4.title"),
      description: t("solution.item4.desc"),
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
            <CheckCircle className="h-4 w-4" />
            Nossa solução
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t("solution.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("solution.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-smooth flex-shrink-0 shadow-md">
                <solution.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
