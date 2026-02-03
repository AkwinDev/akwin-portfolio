'use client'

import { Mail, Phone, MapPin, Download, Calendar, Award, Briefcase } from 'lucide-react'
import { useScrollReveal } from '@/components/useScrollReveal'

export default function About() {
  const headerReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const contentReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const statsReveal = useScrollReveal({ once: true, threshold: 0.3 })
  const timelineReveal = useScrollReveal({ once: true, threshold: 0.2 })

  const timeline = [
    {
      year: "Jun 2024 - Dec 2025",
      title: "Software Development Engineer",
      company: "Sporfy Technologies Private Limited",
      description: "I began my professional journey as a Software Development Engineer at Sporfy Technologies, working on multiple production-ready projects."
    },
    {
      year: "Feb 2024 - May 2024",
      title: "Internship",
      company: "Sporfy Technologies Private Limited",
      description: "I completed a 3-month internship, where I gained hands-on experience in building responsive web applications and working with backend technologies."
    },
    {
      year: "2020 - 2024",
      title: "Student",
      company: "Coimbatore Institute Of Engineering And Technology",
      description: "Pursued a Bachelor’s degree in Computer Science and Engineering, where I developed a strong foundation in software development and algorithms."
    },
  ]

  return (
    <div className="page-container">
      <div
        ref={headerReveal.ref}
        className={`text-center mb-16 ${headerReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
          }`}
      >
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          Get to know more about my journey, skills, and passion for software developer
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div
            ref={contentReveal.ref}
            className={`lg:col-span-2 space-y-6 ${contentReveal.isVisible ? 'scroll-reveal-left active' : 'scroll-reveal-left'
              }`}
          >
            <div className="card p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Hello! I'm Akwin
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <div>
                  I am a highly skilled and motivated <span className="font-bold text-slate-900">Software Development Engineer</span> specializing in full-stack development, with <span className="font-bold text-blue-600">1.7 years</span> of experience building modern, scalable web applications using React, Next.js, Node.js, and MongoDB.
                </div>

                <div>
                  Passionate about crafting intuitive user interfaces and robust backend systems, I focus on writing
                  <span className="font-bold text-slate-900"> clean, maintainable code</span> and adhering to best practices in software development. My expertise spans the full web stack, enabling me to design and implement end-to-end solutions that solve real-world problems and deliver exceptional user experiences.
                </div>

                <div>
                  Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I’m always eager to learn, collaborate, and take on new challenges that push my technical and creative boundaries.
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1G2BJ8Cl55XX-2ludcJlo6rV6xxyVlrMi"
                  className="btn-primary"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <a href="/contact" className="btn-secondary">
                  Let's Talk
                </a>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What I Do Best
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: '💻',
                    title: 'Frontend Development',
                    desc: 'Creating responsive, accessible interfaces',
                    color: 'from-blue-50 to-blue-100 border-blue-200'
                  },
                  {
                    icon: '⚙️',
                    title: 'Backend Development',
                    desc: 'Building scalable APIs and systems',
                    color: 'from-green-50 to-green-100 border-green-200'
                  },
                  // {
                  //   icon: '🎨',
                  //   title: 'UI/UX Design',
                  //   desc: 'Designing beautiful user experiences',
                  //   color: 'from-purple-50 to-purple-100 border-purple-200'
                  // },
                  {
                    icon: '🚀',
                    title: 'Performance',
                    desc: 'Optimizing for speed and efficiency',
                    color: 'from-orange-50 to-orange-100 border-orange-200'
                  }
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-4 bg-gradient-to-br ${item.color} rounded-xl border magnetic`}
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 ${contentReveal.isVisible ? 'scroll-reveal-right active' : 'scroll-reveal-right'
              }`}
          >
            <div className="card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Quick Facts
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      Location
                    </p>
                    <p className="text-sm text-slate-600">
                      Rajavoor, Kanyakumari
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:akwindevajunuse@gmail.com"
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors break-all"
                    >
                      akwindevajunuse@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:9566461726"
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      +91 9566461726
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      Experience
                    </p>
                    <p className="text-sm text-slate-600">
                      1.7 Years
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                    <Award size={24} className="mx-auto text-blue-600 mb-2" />
                    <p className="text-2xl font-bold text-blue-600 font-mono">
                      3+
                    </p>
                    <p className="text-xs text-slate-600">
                      Projects
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl text-center">
                    <Briefcase size={24} className="mx-auto text-green-600 mb-2" />
                    <p className="text-2xl font-bold text-green-600 font-mono">
                      10+
                    </p>
                    <p className="text-xs text-slate-600">
                      Skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={timelineReveal.ref}
          className={`${timelineReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
            }`}
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            My Journey
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                    }`}
                >
                  <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="card p-6 magnetic">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                      <div className="h-px flex-1 bg-slate-200"></div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={statsReveal.ref}
          className={`mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 ${statsReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
            }`}
        >
          {[
            { label: 'Years Experience', value: '1.7', icon: '📅' },
            { label: 'Projects Completed', value: '50+', icon: '✅' },
            { label: 'Technologies', value: '10+', icon: '🛠️' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="card p-6 text-center magnetic"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 font-mono mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-slate-600 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}