import { Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/scrollProgess'
import Navigation from '@/components/navigation'
import { ReactNode } from 'react'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'Akwin Deva Junuse G - Software Development Engineer',
  description: 'Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Building modern, scalable web applications.',
  keywords: ['Software Developer', 'Full Stack', 'React', 'Next.js', 'Node.js', 'MongoDB'],
  authors: [{ name: 'Akwin Deva Junuse G' }],
  openGraph: {
    title: 'Akwin Deva Junuse G - Software Development Engineer',
    description: 'Full-stack developer portfolio showcasing modern web applications',
    type: 'website',
  },
}

export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 antialiased">
        <ScrollProgress />
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}