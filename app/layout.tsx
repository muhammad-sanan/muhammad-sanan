import './globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Muhammad Sanan | Portfolio',
  description: 'Full Stack Web Developer Portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-950 text-gray-100 font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
