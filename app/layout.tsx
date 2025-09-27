import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Importantist - Gestão de Atividades Simples e Intuitiva",
  description:
    "Sistema de gerenciamento de atividades orientado ao dia a dia. Simples, intuitivo e sem burocracia. Organize suas tarefas com eficiência.",
  keywords: "gestão de atividades, produtividade, organização, tarefas, rotina, gerenciamento",
  authors: [{ name: "Importantist" }],
  openGraph: {
    title: "Importantist - Gestão de Atividades Simples e Intuitiva",
    description: "Sistema de gerenciamento de atividades orientado ao dia a dia. Simples, intuitivo e sem burocracia.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
