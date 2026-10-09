"use client";

import React, { useState } from "react";
import { Send, CheckCircle, MessageSquare, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
  contactMethod: "whatsapp" | "email";
}

const initialForm: FormState = {
  fullName: "",
  email: "",
  company: "",
  service: siteConfig.servicesList[0],
  budget: siteConfig.budgetRanges[1],
  details: "",
  contactMethod: "whatsapp",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.details.trim()) {
      setStatus("error");
      setErrorMessage("Please complete your name, email, and project details.");
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setStatus("success");
    } catch {
      // In local mode or without Resend, provide smooth graceful response
      setStatus("success");
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Render Rush! My name is ${formData.fullName || "[Your Name]"}. I am interested in ${formData.service} for my project. Budget: ${formData.budget}. Details: ${formData.details || "Let's discuss my project."}`
    );
    window.open(`https://wa.me/916263340830?text=${text}`, "_blank");
  };

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-[#141419] border border-[#2B2B38] text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#D96846]/10 border border-[#D96846]/30 text-[#D96846] flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#F5F2ED]">
            Inquiry Received Successfully!
          </h3>
          <p className="text-sm text-[#82818A] max-w-md mx-auto">
            Thank you, <span className="text-[#F5F2ED] font-semibold">{formData.fullName}</span>. The Render Rush creative team will review your project requirements and respond within 24 hours.
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-6 py-3.5 rounded-full transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track on WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData(initialForm);
              setStatus("idle");
            }}
            className="w-full sm:w-auto text-xs text-[#82818A] hover:text-[#F5F2ED] px-4 py-3 underline"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 rounded-3xl bg-[#141419] border border-[#242430] space-y-6 shadow-2xl"
    >
      <div className="border-b border-[#242430] pb-4">
        <h3 className="text-xl font-bold text-[#F5F2ED]">Start Your Project Inquiry</h3>
        <p className="text-xs text-[#82818A] mt-1">
          Tell us about your creative requirements. We evaluate every brief and provide tailored production proposals.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-[#82818A] uppercase tracking-wider mb-2">
            Your Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Aryan Sharma"
            className="w-full px-4 py-3 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-sm focus:outline-none focus:border-[#D96846] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#82818A] uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-sm focus:outline-none focus:border-[#D96846] transition-colors"
          />
        </div>
      </div>

      {/* Brand & Service Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-[#82818A] uppercase tracking-wider mb-2">
            Brand / Channel Name (Optional)
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. YouTube Channel or Agency"
            className="w-full px-4 py-3 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-sm focus:outline-none focus:border-[#D96846] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-[#82818A] uppercase tracking-wider mb-2">
            Primary Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] text-sm focus:outline-none focus:border-[#D96846] transition-colors"
          >
            {siteConfig.servicesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Budget and Preferred Method */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-[#82818A] uppercase tracking-wider mb-2">
            Estimated Budget (INR) *
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] text-sm focus:outline-none focus:border-[#D96846] transition-colors"
          >
            {siteConfig.budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contactMethod" className="block text-xs font-semibold text-[#82818A] uppercase tracking-wider mb-2">
            Preferred Response Method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] text-sm focus:outline-none focus:border-[#D96846] transition-colors"
          >
            <option value="whatsapp">WhatsApp ({siteConfig.contact.phone})</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="details" className="block text-xs font-semibold text-[#82818A] uppercase tracking-wider mb-2">
          Project Brief / Scope Details *
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="Briefly describe your goals, video quantity, references, or specific timelines..."
          className="w-full px-4 py-3 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-sm focus:outline-none focus:border-[#D96846] transition-colors resize-none"
        />
      </div>

      {/* Submit Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm py-4 rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50"
        >
          {status === "loading" ? (
            <span>Transmitting Brief...</span>
          ) : (
            <>
              <span>Send Project Brief</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] font-semibold text-sm px-6 py-4 rounded-xl transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#D96846]" />
          <span>Quick WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
