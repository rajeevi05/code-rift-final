"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ["#home", "#challenges", "#timeline", "#awards", "#register"]
      const scrollPosition = window.scrollY + 200 // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i])
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Challenges", href: "#challenges" },
    { label: "Timeline", href: "#timeline" },
    { label: "Awards", href: "#awards" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const isActiveSection = (href: string) => {
    return activeSection === href
  }

  return (
    <>
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-3xl">
        <div
          className={`relative flex items-center justify-center px-3 sm:px-4 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/5 dark:bg-black/5 backdrop-blur-3xl backdrop-saturate-200 border border-white/10 dark:border-white/5 shadow-2xl shadow-black/10"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* CYBERNAUTS on the left */}
          <div className="absolute left-3 sm:left-4">
            <span className="font-bold text-xs sm:text-sm" style={{ color: "#c12d28" }}>
              Cybernauts
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs transition-colors duration-300 cursor-pointer ${
                  isActiveSection(item.href)
                    ? "text-[#c12d28]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Register Button and Mobile Menu - Positioned on the right */}
          <div className="absolute right-3 sm:right-4 flex items-center gap-2">
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, "#register")}
              className="hidden sm:block text-xs px-4 py-1.5 rounded-full bg-[#c12d28] text-white transition-all duration-300 hover:opacity-80 hover:scale-105 cursor-pointer"
            >
              Register
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-3 right-3 z-50 bg-white/5 dark:bg-black/5 backdrop-blur-3xl backdrop-saturate-200 border border-white/10 dark:border-white/5 rounded-2xl p-4 shadow-2xl shadow-black/10 transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm py-4 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                isActiveSection(item.href)
                  ? "text-[#c12d28] bg-[#c12d28]/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, "#register")}
            className="sm:hidden text-sm text-center mt-2 px-4 py-2.5 rounded-full bg-[#c12d28] text-white transition-all duration-300 hover:opacity-80 cursor-pointer"
          >
            Register
          </a>
        </div>
      </div>
    </>
  )
}
