"use client";

import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useSearchParams } from "next/navigation";
import { getProductBySlug } from "@/lib/data/products";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// We extract the internal component that uses `useSearchParams` into a distinct
// client component wrapped in a `<Suspense>` boundary.
// This is necessary because `useSearchParams` on a page component forces dynamic rendering,
// and it's best practice.
function InquiryFormInner() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    requiredProducts: ""
  });
  
  useEffect(() => {
    if (productParam) {
      const product = getProductBySlug(productParam);
      if (product) {
        setFormData(prev => ({
          ...prev,
          requiredProducts: product.name
        }));
      }
    }
  }, [productParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, integrate with an API to send the email/Slack message
    alert("Thank you! Your quote request has been submitted. We will contact you shortly.");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 flex flex-col md:flex-row">
      {/* Left Column: Contact Info */}
      <div className="w-full md:w-1/3 bg-gray-900 text-white p-8 lg:p-12">
        <h2 className="text-3xl font-extrabold font-display mb-6">Let's Talk Solutions.</h2>
        <p className="text-gray-300 mb-10 leading-relaxed">
          Need a custom quote or unsure which product suits your facility? Our environmental experts are ready to assist.
        </p>
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
              <span className="material-icons text-[#FFD100]">phone</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">24/7 Helpline</p>
              <p className="font-bold text-lg">071 788 1312</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
              <span className="material-icons text-[#FFD100]">email</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Email Us</p>
              <p className="font-bold">sales@sssksolutions.co.za</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Column: Form */}
      <div className="w-full md:w-2/3 p-8 lg:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
              <Input 
                id="name" 
                name="name" 
                required 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 focus-visible:ring-[#FFD100]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company Name</label>
              <Input 
                id="company" 
                name="company" 
                placeholder="Acme Industrial"
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-50 focus-visible:ring-[#FFD100]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 focus-visible:ring-[#FFD100]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                placeholder="082 123 4567"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-50 focus-visible:ring-[#FFD100]"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="location" className="text-sm font-semibold text-gray-700">Delivery Location</label>
              <Input 
                id="location" 
                name="location" 
                placeholder="City/Province"
                value={formData.location}
                onChange={handleChange}
                className="bg-gray-50 focus-visible:ring-[#FFD100]"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="requiredProducts" className="text-sm font-semibold text-gray-700">Required Products / Enquiry</label>
              <Textarea 
                id="requiredProducts" 
                name="requiredProducts" 
                rows={4}
                placeholder="Specify the items you're interested in or your particular requirements..."
                value={formData.requiredProducts}
                onChange={handleChange}
                className="bg-gray-50 focus-visible:ring-[#FFD100] resize-y"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-[#FFD100] text-black hover:bg-yellow-500 font-bold px-10 py-6 text-lg tracking-wide rounded-xl shadow-md transition-colors"
          >
            Submit Quote Request
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function EnquirePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display">
              Request a Quote
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you with pricing and availability.
            </p>
          </div>

          <Suspense fallback={<div className="min-h-[600px] flex items-center justify-center text-gray-500">Loading form...</div>}>
            <InquiryFormInner />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
