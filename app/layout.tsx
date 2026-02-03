import './globals.css'
import ScrollProgress from '@/components/scrollProgess'
import Navigation from '@/components/navigation'
import { ReactNode } from 'react'


export const metadata = {
  title: 'Akwin Deva Junuse G - Software Development Engineer',
  description: 'Full-stack developer specializing in React, Next.js, Java, and MongoDB. Building modern, scalable web applications.',
  keywords: ['Akwin Deva Junuse','Akwin','Software Developer', 'Full Stack', 'React', 'Next.js', 'Java', 'MongoDB' ,'Chennai','Bengaluru','Looking for oppertunities'],
  authors: [{ name: 'Akwin Deva Junuse G' }],
  openGraph: {
    title: 'Akwin Deva Junuse G - Software Development Engineer',
    description: 'Full-stack developer specializing in React, Next.js, Java, and MongoDB. Building modern, scalable web applications.',
    url: "https://akwin-portfolio.vercel.app/",
    siteName: "Akwin-Portfolio",
    type: 'website',
  },
}

export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <html lang="en">
      <body className="regular bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 antialiased">
        <ScrollProgress />
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}