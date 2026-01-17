"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="flex-1 flex justify-center py-8 sm:py-10 px-4">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* LEFT COLUMN: Quote Form */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-foreground tracking-tight text-xl sm:text-2xl md:text-[28px] font-bold leading-tight">
              Request a Quote or Consultation
            </h2>
            <p className="text-foreground-muted mt-2 text-sm sm:text-base">
              Fill out the form below and an environmental specialist will contact you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <label className="flex flex-col flex-1">
                <span className="text-foreground text-sm font-medium leading-normal pb-2">Name</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 bg-background focus:border-primary h-12 placeholder:text-foreground-muted px-4 text-base transition-all"
                  placeholder="Enter your full name"
                />
              </label>
              <label className="flex flex-col flex-1">
                <span className="text-foreground text-sm font-medium leading-normal pb-2">Company Name</span>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 bg-background focus:border-primary h-12 placeholder:text-foreground-muted px-4 text-base transition-all"
                  placeholder="Enter company name"
                />
              </label>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <label className="flex flex-col flex-1">
                <span className="text-foreground text-sm font-medium leading-normal pb-2">Email Address</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 bg-background focus:border-primary h-12 placeholder:text-foreground-muted px-4 text-base transition-all"
                  placeholder="name@company.com"
                />
              </label>
              <label className="flex flex-col flex-1">
                <span className="text-foreground text-sm font-medium leading-normal pb-2">Phone Number</span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 bg-background focus:border-primary h-12 placeholder:text-foreground-muted px-4 text-base transition-all"
                  placeholder="+27 ..."
                />
              </label>
            </div>
            {/* Service Dropdown */}
            <label className="flex flex-col w-full">
              <span className="text-foreground text-sm font-medium leading-normal pb-2">Service Required</span>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="flex w-full appearance-none rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 bg-background focus:border-primary h-12 px-4 text-base transition-all pr-10 cursor-pointer"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="emergency">Emergency Response</option>
                  <option value="waste">Waste Management</option>
                  <option value="pollution">Pollution Control</option>
                  <option value="assessment">Environmental Assessments</option>
                  <option value="training">Training</option>
                  <option value="products">Products</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground">
                  <span className="material-icons">expand_more</span>
                </div>
              </div>
            </label>
            {/* Message Textarea */}
            <label className="flex flex-col w-full">
              <span className="text-foreground text-sm font-medium leading-normal pb-2">
                Message / Site Location Details
              </span>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="flex w-full resize-y min-h-[120px] rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 bg-background focus:border-primary p-4 text-base transition-all placeholder:text-foreground-muted"
                placeholder="Describe your request or specific location details..."
              ></textarea>
            </label>
            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-accent text-black text-base font-bold uppercase tracking-wider hover:bg-yellow-400 hover:shadow-lg transition-all"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Contact Cards & Map */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
          {/* Contact Cards Stack */}
          <div className="flex flex-col gap-4">
            {/* Phone Card */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-gray-200 hover:border-primary/30 transition-colors group">
              <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons text-primary text-xl sm:text-2xl">call</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-foreground text-base sm:text-lg font-bold">Call Us</h3>
                <p className="text-foreground-muted text-sm mt-1">24/7 Helpline</p>
                <p className="text-foreground font-medium text-base sm:text-lg">071 788 1312</p>
                <p className="text-foreground-muted text-sm mt-2">Office Line</p>
                <p className="text-foreground font-medium">+27 11 000 0000</p>
              </div>
            </div>
            {/* Address Card */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-gray-200 hover:border-primary/30 transition-colors group">
              <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons text-primary text-xl sm:text-2xl">location_on</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-foreground text-base sm:text-lg font-bold">Our Office</h3>
                <p className="text-foreground-muted text-sm mt-1 mb-2">Visit us at our headquarters:</p>
                <address className="text-foreground font-medium not-italic leading-relaxed text-sm sm:text-base">
                  123 Industrial Parkway
                  <br />
                  Spartan, Kempton Park
                  <br />
                  Gauteng, South Africa
                </address>
              </div>
            </div>
            {/* Email Card */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-gray-200 hover:border-primary/30 transition-colors group">
              <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons text-primary text-xl sm:text-2xl">mail</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-foreground text-base sm:text-lg font-bold">Email Us</h3>
                <p className="text-foreground-muted text-sm mt-1">General Inquiries</p>
                <a href="mailto:info@sssksolutions.co.za" className="text-primary font-medium hover:underline">
                  info@sssksolutions.co.za
                </a>
                <p className="text-foreground-muted text-sm mt-2">Sales Department</p>
                <a
                  href="mailto:sales@sssksolutions.co.za"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  sales@sssksolutions.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Map Integration */}
          <div className="w-full rounded-xl overflow-hidden border border-gray-200 h-[200px] sm:h-[250px] relative bg-gray-100 group">
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Map view of Gauteng South Africa"
              fill
              className="object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="material-icons text-primary animate-bounce">location_on</span>
              <span className="text-white font-bold text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                View on Google Maps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
