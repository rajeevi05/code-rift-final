"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FaChevronDown, FaTrophy, FaMedal } from "react-icons/fa6"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useMotionTemplate, useMotionValue, motion } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const challenges = [
    {
      id: 1,
      number: "001",
      title: "The Worst UI Challenge",
      description: "Design intentionally bad user interfaces and learn what NOT to do.",
      details: "Create the most unusable interface possible. Learn poor design patterns through extreme examples.",
      tips: ["Clashing colors", "Bad typography", "Confusing navigation", "Over-complications"],
    },
    {
      id: 2,
      number: "002",
      title: "Build One App: AI vs Manual",
      description: "Build the same app twice—with AI assistance and manually.",
      details: "Experience the power and limitations of AI by creating identical applications using different methods.",
      tips: ["Time comparison", "Code quality", "Learning speed", "Problem-solving"],
    },
  ]

  const events = [
    {
      time: "JAN 20",
      title: "The Gate Opens",
      description: "Opening ceremony and formal workshop begins.",
      phase: "Day 1",
    },
    {
      time: "JAN 20",
      title: "Into the Void",
      description: "Creative workshop and fun challenges.",
      phase: "Day 1",
    },
    {
      time: "JAN 21",
      title: "The Upside Down",
      description: "The official CODE RIFT hackathon begins",
      phase: "Day 2",
    },
    {
      time: "JAN 21",
      title: "The Final Showdown",
      description: "Submissions due. Demo presentations and judging.",
      phase: "Day 2",
    },
    {
      time: "JAN 21",
      title: "Closing the Rift",
      description: "Winners announced. Closing ceremony and networking.",
      phase: "Day 2",
    },
  ]

  const awards = [
    {
      rank: 1,
      title: "CTRL Award",
      subtitle: "Best Fundamentals & Learning",
      prize: "₹10,000 + Certificate",
      description: "Exceptional understanding of core concepts",
      icon: FaTrophy,
    },
    {
      rank: 2,
      title: "ALT Award",
      subtitle: "Most Creative & Innovation",
      prize: "₹7,500 + Certificate",
      description: "Most innovative problem-solving approach",
      icon: FaMedal,
    },
    {
      rank: 3,
      title: "CREATE Award",
      subtitle: "Best Final App / Prototype",
      prize: "₹5,000 + Certificate",
      description: "Most polished and functional product",
      icon: FaTrophy,
    },
  ]

  // Trigger animations only when elements come into view
  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = document.querySelectorAll<HTMLElement>(".fade-in, .slide-up, .slide-in-left")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", phone: "", college: "", year: "", branch: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-1 md:py-20 fade-in"
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "85% center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        {/* Shadow overlay for smaller screens and iPad */}
        <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Title image */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 xl:left-16 top-[20%] sm:top-1/4 md:top-1/3 -translate-y-1/2 z-10 max-w-[350px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[450px] slide-in-left">
          <Image
            src="/title.png"
            alt="CODE RIFT"
            width={450}
            height={225}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Black gradient transition at bottom - larger for smaller screens */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
      </section>

      {/* Challenges Section */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Default: phone screens - center the background and cover */
        #challenges {
          background-image: url(/vecna_vs_steve.png);
          background-position: center left 20%;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: cover;
        }

        /* Tablets up to iPad Pro (~768px to 1023px): match previous phone layout (shifted left 48%) */
        @media (min-width: 768px) and (max-width: 1023px) {
          #challenges {
            background-position: left 48%;
          }
        }

        /* Desktop: restore original desktop layout */
        @media (min-width: 1024px) {
          #challenges {
            background-size: 90%;
            background-position: left 30%;
          }
        }
      `,
        }}
      />
      <section
        id="challenges"
        className="relative min-h-screen py-1 sm:py-1 md:py-20 px-4 sm:px-6 md:px-8 mt-1 md:mt-24"
      >
        {/* Shadow overlay for smaller screens and iPad */}
        <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

        {/* Black gradient overlay on background image */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-5" />

        {/* Black gradient transition at top - larger for smaller screens */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-2 sm:h-2 md:h-16 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Content */}
        <div className="relative z-20 pt-28 sm:pt-32 slide-up">
          <div
            className="mx-auto lg:ml-auto lg:mr-8 xl:mr-16 max-w-5xl px-4 md:px-8"
            style={{ transform: "translateY(-6%)" }}
          >
            {/* Header */}
            <div className="mb-10 sm:mb-12 md:mb-14 text-center md:text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight heading-font">CHALLENGES</h1>
            </div>

            {/* Challenges List - left aligned on small, right aligned on large */}
            <div className="flex justify-start lg:justify-end fade-in">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex flex-col justify-center space-y-6">
                {challenges.map((challenge, index) => {
                  const isExpanded = expandedId === challenge.id
                  return (
                    <div
                      key={challenge.id}
                      className="group cursor-pointer transition-all duration-500 ease-out text-left lg:text-right"
                      onClick={() => setExpandedId(isExpanded ? null : challenge.id)}
                    >
                      {/* Challenge Number */}
                      <div className="mb-2">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-light text-gray-500 tracking-tight">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Challenge Content */}
                      <div className="flex flex-col gap-2">
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold text-white tracking-tight heading-font group-hover:text-gray-200 transition-colors duration-300">
                          {challenge.title}
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg lg:text-base text-gray-400 font-light leading-relaxed mb-2">
                          {challenge.description}
                        </p>

                        {/* Expanded Details */}
                        <div className={`overflow-hidden transition-all duration-500 ease-out ${
                          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-2 border-t border-gray-800">
                            <p className="text-base lg:text-sm text-gray-300 font-light leading-relaxed mb-3">
                              {challenge.details}
                            </p>
                            
                            {/* Tips Grid */}
                            <div className="grid grid-cols-2 gap-2">
                              {challenge.tips.map((tip, i) => (
                                <div
                                  key={i}
                                  className="text-center py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-gray-700"
                                >
                                  <p className="text-sm sm:text-base lg:text-sm text-gray-300 font-light">
                                    {tip}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Expand Indicator */}
                        <div className="flex justify-start lg:justify-end mt-1">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                            <FaChevronDown
                              size={12}
                              className={`text-gray-400 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Black gradient transition at bottom - larger for smaller screens */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
      </section>

      {/* Timeline Section */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Default: phone & tablet (smaller than laptop) - fill screen with air-max and center */
        #timeline {
          background-image: url(/air-max.png);
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: cover;
        }

        /* Laptop and larger (desktop) - restore original layout */
        @media (min-width: 1024px) {
          #timeline {
            background-size: 40%;
            background-position: center 70%;
          }
        }
      `,
        }}
      />
      <section
        id="timeline"
        className="relative min-h-screen pt-1 md:pt-16 pb-6 md:pb-32 px-4 font-sans selection:bg-[#c12d28] selection:text-white mt-1 md:mt-[72px] fade-in transform translate-y-[20%] lg:translate-y-0"
      >
        {/* Dark overlay for smaller screens */}
        <div className="absolute inset-0 bg-black/60 lg:hidden pointer-events-none z-5" />
        {/* Black gradient transition at top - larger for smaller screens */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-2 sm:h-2 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Content */}
        <div className="relative z-20 slide-up">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 fade-in">
              <p className="text-xs tracking-[0.3em] uppercase text-[#c12d28] mb-2">
                The Journey
              </p>
              <h2 className="text-5xl md:text-7xl font-black mb-3 uppercase tracking-tighter heading-font">
                Timeline
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 mb-4 md:mb-6 last:mb-8 md:last:mb-12 slide-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-[35%] ${
                      index % 2 === 0 ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
                    }`}
                  >
                    <span className="text-xs tracking-widest text-[#c12d28] uppercase font-bold">
                      {event.phase}
                    </span>
                    <p className="text-sm text-gray-400 mt-0.5 mb-1 font-mono">{event.time}</p>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 heading-font">{event.title}</h3>
                    <p className="text-sm text-gray-300 leading-tight">{event.description}</p>
                  </div>

                  {/* Center spacer for more distance */}
                  <div className="hidden md:block w-[30%] flex-shrink-0" />

                  {/* Content on opposite side */}
                  <div className="hidden md:block md:w-[35%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Phones & tablets (smaller than laptop) - increase crew.png by 40% (70% * 1.4 = 98%) */
        #awards {
          background-image: url(/crew.png);
          background-position: center bottom;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: 98%;
        }

        /* Laptop and larger - keep original 70% size */
        @media (min-width: 1024px) {
          #awards {
            background-size: 70%;
          }
        }
      `}} />
      <section
        id="awards"
        className="relative min-h-screen flex items-center justify-center px-4 mt-1 md:mt-0 fade-in"
      >
        {/* Content */}
        <div
          className="relative z-20 text-center max-w-4xl py-100 slide-up"
          style={{ transform: "translateY(-50%)" }}
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight heading-font mb-4">
            Rs. 18,000/- prize pool
          </p>
          <p className="text-lg sm:text-xl text-gray-300">
            Remaining details will be revealed soon...
          </p>
        </div>

        {/* Black gradient transition at bottom - larger for smaller screens */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
      </section>

      {/* Register Section */}
      <section
        id="register"
        className="relative min-h-screen flex flex-col justify-center items-center py-1 px-4 md:py-20 font-sans mt-1 md:mt-[67px] fade-in"
      >
        {/* Steve (left) and Dusty (right) background characters */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -left-4 sm:-left-6 md:-left-8 bottom-0 slide-in-left">
            <Image
              src="/steve.png"
              alt="Steve"
              width={880}
              height={1320}
              className="w-[44vw] sm:w-[38.5vw] md:w-[33vw] max-w-[440px] h-auto object-contain"
            />
          </div>
          <div className="absolute right-0 bottom-0 slide-in-left">
            <Image
              src="/dusty.png"
              alt="Dusty"
              width={600}
              height={1200}
              className="w-[31vw] sm:w-[25vw] md:w-[23vw] max-w-[250px] h-auto object-contain"
            />
          </div>
        </div>
        {/* Black gradient transition at top - larger for smaller screens */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

        {/* Shadow overlay for smaller screens and iPad */}
        <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Content */}
        <div className="relative z-20 w-full slide-up">
          <div className="text-center my-8 md:my-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight heading-font">JOIN THE EVENT</h1>
            <p className="text-neutral-300 text-sm sm:text-base mb-4">Register for <Image src="/title.png" alt="CTRL + ALT + CREATE" width={200} height={40} className="inline-block h-6 w-auto mx-1 align-middle image-glow" /> and unleash your creativity</p>
          </div>
          <div className="mx-auto w-full max-w-2xl bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            {submitted && (
              <div className="mb-8 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-center text-green-400">
                <p className="font-semibold">Registration successful! We'll be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                <LabelInputContainer>
                  <Label htmlFor="firstName" className="text-neutral-200">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastName" className="text-neutral-200">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="email" className="text-neutral-200">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>

              <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                <LabelInputContainer>
                  <Label htmlFor="phone" className="text-neutral-200">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXXXXXXX"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="year" className="text-neutral-200">Year of Study *</Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        year: value,
                      }))
                    }}
                    required
                  >
                    <GlowSelectTrigger className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500">
                      <SelectValue placeholder="Select Year" />
                    </GlowSelectTrigger>
                    <SelectContent className="bg-black/90 border-white/10 text-white backdrop-blur-xl">
                      <SelectItem value="1st" className="focus:bg-[#c12d28]/50 focus:text-white">1st Year</SelectItem>
                      <SelectItem value="2nd" className="focus:bg-[#c12d28]/50 focus:text-white">2nd Year</SelectItem>
                      <SelectItem value="3rd" className="focus:bg-[#c12d28]/50 focus:text-white">3rd Year</SelectItem>
                      <SelectItem value="4th" className="focus:bg-[#c12d28]/50 focus:text-white">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="college" className="text-neutral-200">College *</Label>
                <Input
                  id="college"
                  name="college"
                  placeholder="CVR College of Engineering"
                  type="text"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="branch" className="text-neutral-200">Branch/Department *</Label>
                <Input
                  id="branch"
                  name="branch"
                  placeholder="e.g., CSE, ECE, Mechanical"
                  type="text"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>

              <button
                className="group/btn relative block h-11 md:h-12 w-full rounded-md bg-gradient-to-br from-[#c12d28] to-[#a02520] font-bold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all hover:bg-[#a02520] hover:scale-[1.01] active:scale-[0.99] mt-6 md:mt-8 text-sm md:text-base"
                type="submit"
              >
                REGISTER NOW
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#c12d28]/50 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#c12d28] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

// Customized Input component (based on Aceternity UI Input) with Red Glow
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    const radius = 150
    const [visible, setVisible] = useState(false)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #c12d28,
          transparent 80%
        )
      `,
        } as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `flex h-12 w-full rounded-md border-none bg-black/50 px-3 py-2 text-sm text-white shadow-input transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[#c12d28] disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  }
)
Input.displayName = "Input"

// Customized Select Trigger component with Red Glow
const GlowSelectTrigger = React.forwardRef<React.ElementRef<typeof SelectTrigger>, React.ComponentPropsWithoutRef<typeof SelectTrigger>>(
  ({ className, children, ...props }, ref) => {
    const radius = 150
    const [visible, setVisible] = useState(false)
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #c12d28,
          transparent 80%
        )
      `,
        } as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <SelectTrigger
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-md border-none bg-black/50 px-3 py-2 text-sm text-white shadow-input transition duration-400 placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none",
            className
          )}
          {...props}
        >
          {children}
        </SelectTrigger>
      </motion.div>
    )
  }
)
GlowSelectTrigger.displayName = "GlowSelectTrigger"
