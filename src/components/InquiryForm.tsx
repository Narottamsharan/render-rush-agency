"use client";

import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, MessageSquare, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  contactMethod: "whatsapp" | "email";
  phone: string;
  details: string;
}

const budgetOptions = [
  ...siteConfig.budgetRanges,
  "Not sure yet / Discuss with team",
];

const initialForm: FormState = {
  fullName: "",
  email: "",
  company: "",
  service: siteConfig.servicesList[0],
  budget: siteConfig.budgetRanges[1],
  contactMethod: "whatsapp",
  phone: "",
  details: "",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address (e.g. name@company.com).");
      return false;
    }

    if (formData.contactMethod === "whatsapp") {
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
      if (!cleanPhone || cleanPhone.length < 8) {
        setErrorMessage("Please provide a valid WhatsApp number (including country code) so our team can reach you.");
        return false;
      }
    }

    if (!formData.details.trim() || formData.details.trim().length < 10) {
      setErrorMessage("Please provide a brief description of your project requirements (at least 10 characters).");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.fullName.trim(),
      from_email: formData.email.trim(),
      brand_name: formData.company.trim() || "Not specified",
      service: formData.service,
      budget: formData.budget,
      preferred_contact: formData.contactMethod === "whatsapp" ? "WhatsApp" : "Email",
      phone: formData.phone.trim() || "Not provided",
      project_brief: formData.details.trim(),
      submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      reply_to: formData.email.trim(),
    };

    try {
      if (serviceId && templateId && publicKey) {
        // Send directly via official EmailJS client SDK
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback to internal API route if EmailJS keys are not yet configured in env
        const res = await fetch("/api/inquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error("Unable to transmit inquiry through backend");
        }
      }

      setStatus("success");
      setFormData(initialForm);
    } catch (err: unknown) {
      console.error("EmailJS submission error:", err);
      setStatus("error");
      setErrorMessage(
        "We couldn't send your inquiry right now. Please try again or contact us directly through WhatsApp."
      );
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Render Rush! My name is ${formData.fullName || "[Your Name]"}. ` +
      `I'm interested in ${formData.service} for my project. ` +
      `Budget: ${formData.budget}. ` +
      `Project Brief: ${formData.details || "Let's discuss my project requirements."}`
    );
    window.open(`https://wa.me/916263340830?text=${text}`, "_blank");
  };

  if (status === "success") {
    return (
      <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#141419] border border-[#2B2B38] text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#D96846]/10 border border-[#D96846]/30 text-[#D96846] flex items-center justify-center mx-auto shadow-lg shadow-[#D96846]/10">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F2ED]">
            Inquiry Submitted Successfully!
          </h3>
          <p className="text-sm text-[#82818A] max-w-md mx-auto leading-relaxed">
            Thanks for reaching out! Your project inquiry has been submitted. The Render Rush team will get back to you as soon as possible.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-6 py-3.5 rounded-full transition-all active:scale-95 shadow-lg shadow-[#D96846]/20"
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
            className="w-full sm:w-auto text-xs text-[#82818A] hover:text-[#F5F2ED] px-4 py-3 underline transition-colors"
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
      noValidate
      className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#141419] border border-[#242430] space-y-6 shadow-2xl"
    >
      <div className="border-b border-[#242430] pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F2ED] tracking-tight">
          Start Your Project Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#82818A] mt-1.5 leading-relaxed">
          Tell us about your creative requirements. We evaluate every brief and prepare tailored proposals.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
          <div className="flex-1 leading-relaxed">
            <p className="font-semibold">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
          >
            Your Full Name <span className="text-[#D96846]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Aryan Sharma"
            className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all min-h-[48px]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
          >
            Email Address <span className="text-[#D96846]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all min-h-[48px]"
          />
        </div>
      </div>

      {/* Brand & Service Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
          >
            Brand / Channel Name <span className="text-xs font-normal text-[#82818A]/70">(Optional)</span>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. YouTube Channel or Agency"
            className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all min-h-[48px]"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
          >
            Primary Service Needed <span className="text-[#D96846]">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all min-h-[48px]"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="budget"
            className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
          >
            Estimated Budget (INR)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all min-h-[48px]"
          >
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contactMethod"
            className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
          >
            Preferred Response Method <span className="text-[#D96846]">*</span>
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all min-h-[48px]"
          >
            <option value="whatsapp">WhatsApp Direct</option>
            <option value="email">Email Response</option>
          </select>
        </div>
      </div>

      {/* Conditional WhatsApp Phone Number Field */}
      {formData.contactMethod === "whatsapp" && (
        <div className="animate-in fade-in duration-200">
          <label
            htmlFor="phone"
            className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
          >
            WhatsApp Number (with country code) <span className="text-[#D96846]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all min-h-[48px]"
          />
          <p className="text-[11px] text-[#82818A] mt-1.5">
            Our creative directors will message you directly with milestone details.
          </p>
        </div>
      )}

      {/* Project Details */}
      <div>
        <label
          htmlFor="details"
          className="block text-xs font-bold text-[#82818A] uppercase tracking-wider mb-2"
        >
          Project Brief / Scope Details <span className="text-[#D96846]">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="Briefly describe your goals, video quantity, references, timeline, or required deliverables..."
          className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D10] border border-[#2B2B38] text-[#F5F2ED] placeholder-[#82818A]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D96846]/40 focus:border-[#D96846] transition-all resize-none min-h-[110px]"
        />
      </div>

      {/* Privacy Notice */}
      <div className="text-[11px] text-[#82818A] leading-relaxed">
        By submitting this project brief, you agree that Render Rush may contact you regarding your inquiry in accordance with our{" "}
        <Link href="/privacy" className="text-[#D96846] hover:underline underline-offset-2">
          Privacy Policy
        </Link>. Your details are strictly used for project evaluation.
      </div>

      {/* Submit & Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 min-h-[48px] shadow-lg shadow-[#D96846]/20 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Brief...</span>
            </>
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
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] font-semibold text-sm px-6 py-4 rounded-xl transition-colors min-h-[48px] cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#D96846]" />
          <span>Quick WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
