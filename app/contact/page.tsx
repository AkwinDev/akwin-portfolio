'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle, Clock } from 'lucide-react'
import { useScrollReveal } from '@/components/useScrollReveal'
import emailjs from 'emailjs-com'
export default function Contact() {
  const headerReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const formReveal = useScrollReveal({ once: true, threshold: 0.2 })
  const infoReveal = useScrollReveal({ once: true, threshold: 0.2 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
const serviceID = 'Akwin@12#21'
  const templateID = 'template_lb0tdv6'
  const publicKey = '3Z8_CXLNfcKV5X5Pe'
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        publicKey
      )

      console.log(result.text)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9566461726",
      href: "tel:9566461726",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "akwindevajunuse@gmail.com",
      href: "mailto:akwindevajunuse@gmail.com",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Rajavoor, Kanyakumari, India",
      href: null,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/akwin-deva-junuse",
      href: "https://linkedin.com/in/akwin-deva-junuse",
      color: "from-blue-600 to-blue-700"
    }
  ]

  return (
    <div className="page-container">
      <div 
        ref={headerReveal.ref}
        className={`text-center mb-16 ${
          headerReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
        }`}
      >
        <h1 className="section-title">Let's Work Together!</h1>
        <p className="section-subtitle">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div 
          ref={infoReveal.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${
            infoReveal.isVisible ? 'scroll-reveal active' : 'scroll-reveal'
          }`}
        >
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.href || '#'}
              target={method.href && method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href && method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`card p-6 text-center magnetic hover:scale-105 transition-all ${
                !method.href ? 'pointer-events-none' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg`}>
                {method.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">
                {method.title}
              </h3>
              <p className="text-sm text-slate-600 break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div 
            className={`lg:col-span-2 space-y-6 ${
              infoReveal.isVisible ? 'scroll-reveal-left active' : 'scroll-reveal-left'
            }`}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">
                      Response Time
                    </p>
                    <p className="text-sm text-slate-600">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">
                      Availability
                    </p>
                    <p className="text-sm text-slate-600">
                      Open to new opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Why Work With Me?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>1.7 years</strong> of experience
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Fast delivery</strong> and communication
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>High-quality</strong> code standards
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Collaborative</strong> approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={formReveal.ref}
            className={`lg:col-span-3 ${
              formReveal.isVisible ? 'scroll-reveal-right active' : 'scroll-reveal-right'
            }`}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="input-field"
                      disabled={status === 'sending'}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="input-field"
                      disabled={status === 'sending'}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion / Opportunity / Question"
                    className="input-field"
                    disabled={status === 'sending'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="input-field resize-none"
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 text-sm animate-scale-in flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                      ✓
                    </div>
                    <span>
                      <strong>Message sent successfully!</strong> I'll get back to you soon.
                    </span>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed magnetic"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="inline-block animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to be contacted via email.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What's your typical response time?",
                a: "I usually respond within 24 hours on weekdays."
              },
              {
                q: "Do you work on fixed-price projects?",
                a: "Yes, I work on both fixed-price and hourly projects."
              },
              {
                q: "What's your development process?",
                a: "I follow agile methodology with regular updates and feedback loops."
              },
              {
                q: "Do you provide post-launch support?",
                a: "Yes, I offer maintenance and support packages for all projects."
              }
            ].map((faq, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}