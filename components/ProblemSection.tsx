"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { AlertCircle, MousePointer, Calendar, Clock } from "lucide-react"

export const ProblemSection = () => {
  const { t } = useTranslation()

  const problems = [
    {
      icon: MousePointer,
      title: t("problem.item1.title"),
      description: t("problem.item1.desc"),
    },
    {
      icon: Calendar,
      title: t("problem.item2.title"),
      description: t("problem.item2.desc"),
    },
    {
      icon: Clock,
      title: t("problem.item3.title"),
      description: t("problem.item3.desc"),
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-red-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
            <AlertCircle className="h-4 w-4" />
            Problemas atuais
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t("problem.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("problem.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-2xl flex items-center justify-center group-hover:bg-red-200 transition-smooth shadow-md">
                <problem.icon className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
