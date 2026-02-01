'use client'

import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '@/components/useScrollReveal'
import { Code, Database, Palette, Zap, Globe } from 'lucide-react'
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiResponsive } from "react-icons/di";
import { GrOptimize } from "react-icons/gr";

interface Skill{
  name:string
  level:number
  icon:string
}
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "TypeScript", level: 90, icon: <BiLogoTypescript/> },
      { name: "JavaScript", level: 95, icon: <DiJavascript/> },
      { name: "React.js", level: 90, icon: <FaReact/> },
      { name: "Next.js", level: 85, icon: <RiNextjsFill/> },
      { name: "Vue.js", level: 85, icon: <FaVuejs/> },
      { name: "HTML5", level: 95, icon: <FaHtml5/> },
      { name: "CSS3", level: 95, icon: <FaCss3Alt/> },
      { name: "Tailwind CSS", level: 90, icon: <RiTailwindCssFill/> },
      { name: "Materia Ui", level: 90, icon: <SiMui/> }
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Java", level: 75, icon: <FaJava/> },
      { name: "Spring Boot", level: 75, icon: <BiLogoSpringBoot/> },
      { name: "MongoDB", level: 70, icon: <SiMongodb/> },
      { name: "PostgreSQL", level: 65, icon: <BiLogoPostgresql/> }
    ]
  },
  {
    title: "Tools & Others",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git & GitHub", level: 90, icon: <FaGithub/> },
      { name: "VS Code", level: 95, icon: <VscVscode/> },
      { name: "Responsive Design", level: 95, icon: <DiResponsive/> },
      { name: "Performance Optimization", level: 85, icon: <GrOptimize/> },
    ]
  }
]

function SkillBar({ skill, delay, isVisible }:{ skill:Skill, delay:number, isVisible:boolean }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setWidth(skill.level)
      }, delay)
    }
  }, [isVisible, skill.level, delay])

  return (
    <div ref={ref} className="card p-6 magnetic">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-bold text-slate-900">
            {skill.name}
          </span>
        </div>
        <span className="text-blue-600 font-bold font-mono">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${width}%` : '0%' }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const headerReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const skillsReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const additionalReveal = useScrollReveal({ once: true, threshold: 0.2 })

  return (
    <div className="page-container">
      <div 
        ref={headerReveal.ref}
        className={`text-center mb-16 ${
          headerReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
        }`}
      >
        <h1 className="section-title">My Skills</h1>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div 
          ref={skillsReveal.ref}
          className="space-y-12"
        >
          {skillCategories.map((category, catIndex) => (
            <section 
              key={category.title}
              className={`${
                skillsReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
              }`}
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="card p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`min-w-14 min-h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {category.title}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {category.skills.map((skill:any, skillIndex) => (
                    <SkillBar 
                      key={skill.name}
                      skill={skill}
                      delay={skillIndex * 100}
                      isVisible={skillsReveal.isVisible}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div 
          ref={additionalReveal.ref}
          className={`mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
            additionalReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
          }`}
        >
          {[
            {
              icon: <Palette className="w-8 h-8" />,
              title: "Design Tools",
              items: ["Figma", "Adobe XD", "Photoshop"],
              color: "from-pink-500 to-rose-500"
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Performance",
              items: ["Lighthouse", "Web Vitals", "Optimization"],
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Deployment",
              items: ["Vercel", "Netlify", "AWS"],
              color: "from-indigo-500 to-purple-500"
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: "Version Control",
              items: ["Git", "GitHub", "GitLab"],
              color: "from-slate-500 to-slate-700"
            }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="card p-6 text-center magnetic hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <div className="space-y-2">
                {item.items.map((subItem, idx) => (
                  <p key={idx} className="text-sm text-slate-600">
                    • {subItem}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">
            Soft Skills & Qualities
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                // icon: "🎓",
                title: "Continuous Learning",
                desc: "Always exploring new technologies and best practices"
              },
              {
                // icon: "👥",
                title: "Team Collaboration",
                desc: "Experienced in working with cross-functional teams"
              },
              {
                // icon: "🚀",
                title: "Problem Solving",
                desc: "Strong analytical skills and attention to detail"
              },
              {
                // icon: "💬",
                title: "Communication",
                desc: "Clear technical communication with team members"
              },
              {
                // icon: "⏰",
                title: "Time Management",
                desc: "Efficient project delivery and deadline management"
              },
              {
                // icon: "🎯",
                title: "Goal-Oriented",
                desc: "Focused on delivering high-quality results"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="card p-6 text-center bg-gradient-to-br from-slate-50 to-white magnetic"
              >
                {/* <div className="text-5xl mb-4">{item.icon}</div> */}
                <h3 className="font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}