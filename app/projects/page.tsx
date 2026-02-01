'use client'

import Image from 'next/image'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/components/useScrollReveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  images: string[]
  tech: string[]
  color: string
  featured: boolean
}

export default function Projects() {
  const headerReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const featuredReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const gridReveal = useScrollReveal({ once: true, threshold: 0.2 })

  const projects = [
    {
      id: 1,
      title: "TicketPrix",
      subtitle: "Event Ticket Booking Platform",
      description: "Developed responsive, feature-rich ticket comparison platform for event ticket booking serving thousands of users with real-time availability updates.",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
      ],
      tech: ["TypeScript", "React.js", "Next.js", "Tailwind CSS", "MongoDB"],
      color: "blue",
      featured: true
    },
    {
      id: 3,
      title: "Sporfy",
      subtitle: "Sports Facility Booking Platform",
      description: "Built responsive UI components for esports development facility booking platform with theme switching and real-time booking APIs.",
      images: [
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
      ],
      tech: ["TypeScript", "React.js", "Tailwind CSS", "Next.js", "Node.js"],
      color: "green",
      featured: true

    },
    {
      id: 4,
      title: "ThiramSports",
      subtitle: "Application Migration Project",
      description: "Migrated ThiramSports application frontend to Next.js (React) for improved performance with rebuilt components and optimized pages.",
      images: [
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
      ],
      tech: ["TypeScript", "React.js", "Tailwind CSS", "Next.js", "MongoDB"],
      color: "purple",
      featured: true
    }
  ]

  const colorClasses: Record<string, string>  = {
    blue: "from-blue-500 to-blue-600",
    indigo: "from-indigo-500 to-indigo-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600"
  }

  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <div className="page-container">
      <div 
        ref={headerReveal.ref}
        className={`text-center mb-16 ${
          headerReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
        }`}
      >
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          A collection of projects showcasing my expertise in full-stack development
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div 
          ref={featuredReveal.ref}
          className={`mb-20 ${
            featuredReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            🌟 Featured Projects
          </h2>

          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`card overflow-hidden mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="grid gap-8">
                {/* <div className="relative h-64 md:h-auto bg-slate-100 rounded-xl overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="h-full"
                  >
                    {project.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div> */}

                <div className="p-6 flex flex-col justify-center">
                  <div className={`inline-block w-fit px-4 py-2 rounded-lg text-sm font-bold mb-4 bg-gradient-to-r ${colorClasses[project.color]} text-white`}>
                    {project.subtitle}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex gap-4">
                    <button className="btn-primary flex-1 sm:flex-none">
                      <ExternalLink size={20} />
                      View Project
                    </button>
                    <button className="btn-secondary">
                      <Github size={20} />
                      Code
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {regularProjects?.length?<div 
          ref={gridReveal.ref}
          className={`${
            gridReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            More Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {regularProjects.map((project:Project, index) => (
              <article 
                key={project.id}
                className="card card-hover overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  {/* <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  /> */}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[project.color]} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4`}>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:scale-110 transition-transform">
                      <Github size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold mb-3 bg-gradient-to-r ${colorClasses[project.color]} text-white`}>
                    {project.subtitle}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech:String, idx:number) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>:null}

        <div className="mt-16 text-center">
          <div className="card p-8 sm:p-12 max-w-2xl mx-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-slate-600 mb-6">
              I'm always open to discussing new projects and opportunities
            </p>
            <a href="/contact" className="btn-primary inline-flex magnetic">
              Get in Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}