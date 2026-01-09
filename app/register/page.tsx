"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
// Ensure motion/react works. If not, fallback to framer-motion or just motion
import { useMotionTemplate, useMotionValue, motion } from "motion/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RegisterPage() {
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
    <div
      className="relative min-h-screen bg-black overflow-hidden font-sans"
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

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen justify-center items-center py-12 px-4 md:py-20">
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
    const radius = 150 // Increased radius for better effect
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
        }}
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
        }}
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
