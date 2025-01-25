import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Analytics } from "@vercel/analytics/react"

import { Footerdemo } from "@/components/ui/footer-section"

import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Navbar />
                    {children}
                    <Analytics />
                </ThemeProvider>
                <div className="block mt-8">
                    <Footerdemo />
                </div>
            </body>
        </html>
    )
}
