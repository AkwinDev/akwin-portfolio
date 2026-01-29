'use client'

import Link from 'next/link'
import { ChevronRight, Code, Palette, Zap, Users, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { useParallax, useScrollReveal } from '@/components/useScrollReveal'
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
export default function Home() {
  const heroReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const statsReveal = useScrollReveal({ once: true, threshold: 0.3 })
  const servicesReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const testimonialsReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const parallaxOffset = useParallax(0.3)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content: "Akwin delivered exceptional work on our web application. His attention to detail and technical expertise made our project a huge success.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Akwin was a game-changer for our startup. He transformed our ideas into a beautiful, functional product.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Studio",
      content: "Akwin's ability to bring designs to life with perfect pixel precision is remarkable. Highly recommended!",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "E-commerce Plus",
      content: "The e-commerce platform Akwin built for us exceeded all expectations. Performance and user experience are top-notch.",
      rating: 5,
      avatar: "DK"
    }
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building scalable and high-performance backend applications with Java, Spring Boot, and robust database integration.",
      color: "from-purple-500 to-pink-500"
    },
    // {
    //   icon: <Palette className="w-8 h-8" />,
    //   title: "UI/UX Design",
    //   description: "Designing beautiful and intuitive interfaces that provide excellent user experiences",
    //   color: "from-orange-500 to-red-500"
    // },
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   title: "Consulting",
    //   description: "Providing technical guidance and best practices for your development projects",
    //   color: "from-green-500 to-teal-500"
    // }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div 
              ref={heroReveal.ref}
              className={`text-center lg:text-left ${
                heroReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
              }`}
            >
              <div className="inline-block mb-6 animate-float">
                <span className="badge">✨ Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
                Building Digital
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent gradient-animate">
                  Experiences
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Full-stack developer specializing in modern web applications.
                Passionate about creating scalable, user-centric solutions with cutting-edge technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projects" className="btn-primary magnetic">
                  View Projects
                  <ChevronRight size={20} />
                </Link>
                <Link href="/contact" className="btn-secondary magnetic">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="card p-8 lg:p-12 max-w-md mx-auto animate-float">
                {/* Profile Avatar */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl shadow-blue-500/30 animate-pulse">
                      AD
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                      <span className="text-3xl">✓</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 text-center magnetic">
                    <div className="text-4xl font-bold text-blue-600 font-mono mb-1">
                      3+
                    </div>
                    <div className="text-sm text-slate-600 font-semibold">
                      Projects
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 text-center magnetic">
                    <div className="text-4xl font-bold text-purple-600 font-mono mb-1">
                      10+
                    </div>
                    <div className="text-sm text-slate-600 font-semibold">
                      Technologies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack with Scroll Reveal */}
      <section 
        ref={statsReveal.ref}
        className={`page-container ${
          statsReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Technologies I Master
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Cutting-edge tools and frameworks for modern web development
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { name: 'TypeScript', icon: <BiLogoTypescript color='white'/>, color: 'from-blue-500 to-blue-600' },
            { name: 'React.js', icon: <FaReact color='white'/>, color: 'from-cyan-500 to-blue-500' },
            { name: 'Next.js', icon: <RiNextjsFill color='white'/>, color: 'from-slate-700 to-slate-900' },
            { name: 'Java', icon: <FaJava color='white'/>, color: 'from-green-500 to-green-600' },
            { name: 'MongoDB', icon: <SiMongodb color='white'/>, color: 'from-green-600 to-green-700' },
            { name: 'Tailwind', icon: <RiTailwindCssFill color='white'/>, color: 'from-sky-500 to-cyan-500' }
          ].map((tech, index) => (
            <div 
              key={tech.name}
              className="card card-hover p-6 text-center magnetic"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`text-5xl mb-3 inline-block p-4 rounded-2xl bg-gradient-to-br ${tech.color} bg-opacity-10`}>
                {tech.icon}
              </div>
              <p className="text-sm font-bold text-slate-900">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesReveal.ref}
        className={`page-container bg-gradient-to-br from-slate-50 to-white ${
          servicesReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What I Offer
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card card-hover p-6 group text-center ${
                servicesReveal.isVisible ? 'scroll-reveal-scale active' : 'scroll-reveal-scale'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
            <div className="flex justify-center w-full">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      {/* <section 
        ref={testimonialsReveal.ref}
        className={`page-container ${
          testimonialsReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!w-[350px]">
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                      <p className="text-xs text-slate-500">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="page-container">
        <div className="card p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-purple-600">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Ready to start your next project? Let's discuss how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105">
              Start a Project
            </Link>
            <Link href="/projects" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all hover:scale-105 border-2 border-blue-400">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}