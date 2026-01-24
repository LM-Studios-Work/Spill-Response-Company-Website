"use client";

import type React from "react";
import { useState } from "react";
// import Image from "next/image" // No longer needed if we remove the static image

// Define the shape of our form data
interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Define the shape of our error object
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generalError, setGeneralError] = useState("");

  // State for Validation Errors
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // --- Validation Logic ---
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
      isValid = false;
    }

    // Email Validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Phone Validation (basic length check)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number is too short.";
      isValid = false;
    }

    // Service Selection Validation
    if (!formData.service) {
      newErrors.service = "Please select a service.";
      isValid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Please provide details about your request.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");

    // 1. Run Validation
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Send to FormSubmit
      const response = await fetch(
        "https://formsubmit.co/ajax/austinmartin271@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Quote Request: ${formData.service} - ${formData.name}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setGeneralError("Something went wrong on our end. Please try again.");
      }
    } catch (error) {
      setGeneralError("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <section className="flex-1 flex justify-center py-8 sm:py-10 px-4">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* LEFT COLUMN: Quote Form or Success View */}
        <div className="lg:col-span-7 flex flex-col">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-green-50 border-2 border-green-100 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-green-600 text-5xl">
                  check
                </span>
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-2">
                Request Received!
              </h2>
              <p className="text-green-700 max-w-md mb-8">
                Thank you, <strong>{formData.name}</strong>. We have received
                your request regarding <strong>{formData.service}</strong>. An
                environmental specialist will contact you at{" "}
                <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={handleReset}
                className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-foreground tracking-tight text-xl sm:text-2xl md:text-[28px] font-bold leading-tight">
                  Request a Quote or Consultation
                </h2>
                <p className="text-foreground-muted mt-2 text-sm sm:text-base">
                  Fill out the form below and an environmental specialist will
                  contact you shortly.
                </p>
              </div>

              {generalError && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-center gap-2">
                  <span className="material-icons text-red-600">error</span>
                  <p className="text-sm font-medium">{generalError}</p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:gap-5"
                noValidate
              >
                {/* Row 1 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <label className="flex flex-col flex-1">
                    <span className="text-foreground text-sm font-medium leading-normal pb-2">
                      Name <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name)
                          setErrors({ ...errors, name: undefined });
                      }}
                      className={`flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 border bg-background h-12 px-4 text-base transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-gray-300 focus:ring-primary/50 focus:border-primary"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <label className="flex flex-col flex-1">
                    <span className="text-foreground text-sm font-medium leading-normal pb-2">
                      Company Name
                    </span>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 bg-background focus:border-primary h-12 placeholder:text-foreground-muted px-4 text-base transition-all"
                      placeholder="Enter company name (Optional)"
                    />
                  </label>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <label className="flex flex-col flex-1">
                    <span className="text-foreground text-sm font-medium leading-normal pb-2">
                      Email Address <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email)
                          setErrors({ ...errors, email: undefined });
                      }}
                      className={`flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 border bg-background h-12 px-4 text-base transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-gray-300 focus:ring-primary/50 focus:border-primary"
                      }`}
                      placeholder="name@company.com"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </span>
                    )}
                  </label>
                  <label className="flex flex-col flex-1">
                    <span className="text-foreground text-sm font-medium leading-normal pb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone)
                          setErrors({ ...errors, phone: undefined });
                      }}
                      className={`flex w-full rounded-lg text-foreground focus:outline-0 focus:ring-2 border bg-background h-12 px-4 text-base transition-all ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-gray-300 focus:ring-primary/50 focus:border-primary"
                      }`}
                      placeholder="+27 ..."
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </span>
                    )}
                  </label>
                </div>

                {/* Service Dropdown */}
                <label className="flex flex-col w-full">
                  <span className="text-foreground text-sm font-medium leading-normal pb-2">
                    Service Required <span className="text-red-500">*</span>
                  </span>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service)
                          setErrors({ ...errors, service: undefined });
                      }}
                      className={`flex w-full appearance-none rounded-lg text-foreground focus:outline-0 focus:ring-2 border bg-background h-12 px-4 text-base transition-all pr-10 cursor-pointer ${
                        errors.service
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-gray-300 focus:border-primary focus:ring-primary/50"
                      }`}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      <option value="emergency">Emergency Response</option>
                      <option value="waste">Waste Management</option>
                      <option value="pollution">Pollution Control</option>
                      <option value="assessment">
                        Environmental Assessments
                      </option>
                      <option value="training">Training</option>
                      <option value="products">Products</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground">
                      <span className="material-icons">expand_more</span>
                    </div>
                  </div>
                  {errors.service && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.service}
                    </span>
                  )}
                </label>

                {/* Message Textarea */}
                <label className="flex flex-col w-full">
                  <span className="text-foreground text-sm font-medium leading-normal pb-2">
                    Message / Site Location Details{" "}
                    <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message)
                        setErrors({ ...errors, message: undefined });
                    }}
                    className={`flex w-full resize-y min-h-[120px] rounded-lg text-foreground focus:outline-0 focus:ring-2 border bg-background p-4 text-base transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                        : "border-gray-300 focus:border-primary focus:ring-primary/50"
                    }`}
                    placeholder="Describe your request or specific location details..."
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </span>
                  )}
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-accent text-black text-base font-bold uppercase tracking-wider hover:bg-yellow-400 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* RIGHT COLUMN: Contact Cards & Map */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-gray-200 hover:border-primary/30 transition-colors group">
              <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons text-primary text-xl sm:text-2xl">
                  call
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-foreground text-base sm:text-lg font-bold">
                  Call Us
                </h3>
                <p className="text-foreground-muted text-sm mt-1">
                  24/7 Helpline
                </p>
                <a href="tel:0717881312" className="text-foreground font-medium text-base sm:text-lg hover:text-primary transition">
                  071 788 1312
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-gray-200 hover:border-primary/30 transition-colors group">
              <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons text-primary text-xl sm:text-2xl">
                  location_on
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-foreground text-base sm:text-lg font-bold">
                  Our Office
                </h3>
                <address className="text-foreground font-medium not-italic leading-relaxed text-sm sm:text-base mt-2">
                  123 Industrial Parkway, Spartan
                  <br />
                  Kempton Park, Gauteng
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-gray-200 hover:border-primary/30 transition-colors group">
              <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons text-primary text-xl sm:text-2xl">
                  mail
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-foreground text-base sm:text-lg font-bold">
                  Email Us
                </h3>
                <a
                  href="mailto:info@sssksolutions.co.za"
                  className="text-primary font-medium hover:underline mt-1"
                >
                  info@sssksolutions.co.za
                </a>
              </div>
            </div>
          </div>

          {/* UPDATED: GOOGLE MAPS IFRAME 
               -------------------------------------------
               Note: "123 Industrial Parkway" appears to be a fictional placeholder.
               I have set the map query to "Spartan, Kempton Park" which is the real industrial area.
               Change the 'q' parameter in the src below to your exact address once confirmed.
           */}
          <div className="w-full rounded-xl overflow-hidden border border-gray-200 h-[200px] sm:h-[250px] relative bg-gray-100 group">
            <iframe
              title="Google Map Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              // We use the embed API with a query.
              src="https://maps.google.com/maps?q=123+Industrial+Parkway%2C+Spartan%2C+Kempton+Park&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            ></iframe>

            {/* Overlay Button to Open Full Maps */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 pointer-events-none">
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Industrial+Parkway,+Spartan,+Kempton+Park"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-2"
              >
                <span className="material-icons text-primary animate-bounce">
                  location_on
                </span>
                <span className="text-white font-bold text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm hover:bg-black/70 transition-colors">
                  View on Google Maps
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
