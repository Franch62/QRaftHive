import "@/app/(general)/globals.css"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ClientProvider from "@/components/ClientProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "QRaftHive",
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
                <ClientProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <Header />
                        <Toaster />
                        {children}
                        <Analytics />
                    </ThemeProvider>
                    <div className="block mt-8">
                        <Footer />
                    </div>
                </ClientProvider>
            </body>
        </html>
    )
}
