"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name (at least 2 characters)."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(4, "Please enter a subject (at least 4 characters)."),
  message: z
    .string()
    .min(20, "Please write a message of at least 20 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      // TODO: Replace with your real form submission endpoint
      // e.g. Formspree: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", ... })
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 outline-none placeholder-shown:text-gray-500";
  const inputStyle = {
    background: "var(--color-surface-elevated)",
    border: "1px solid var(--color-border)",
    color: "var(--color-foreground)",
  };
  const inputFocusClass =
    "focus:ring-2 focus:ring-accent focus:border-transparent";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-foreground)" }}
        >
          Name <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          className={`${inputBase} ${inputFocusClass} ${errors.name ? "ring-2 ring-red-500" : ""}`}
          style={inputStyle}
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p
            id="name-error"
            role="alert"
            className="mt-1.5 text-xs flex items-center gap-1"
            style={{ color: "#f87171" }}
          >
            <AlertCircle size={12} aria-hidden="true" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-foreground)" }}
        >
          Email <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={`${inputBase} ${inputFocusClass} ${errors.email ? "ring-2 ring-red-500" : ""}`}
          style={inputStyle}
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="mt-1.5 text-xs flex items-center gap-1"
            style={{ color: "#f87171" }}
          >
            <AlertCircle size={12} aria-hidden="true" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-foreground)" }}
        >
          Subject <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="What's this about?"
          className={`${inputBase} ${inputFocusClass} ${errors.subject ? "ring-2 ring-red-500" : ""}`}
          style={inputStyle}
          aria-required="true"
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p
            id="subject-error"
            role="alert"
            className="mt-1.5 text-xs flex items-center gap-1"
            style={{ color: "#f87171" }}
          >
            <AlertCircle size={12} aria-hidden="true" />
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-foreground)" }}
        >
          Message <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell me what you're working on, what you need, or just say hello."
          className={`${inputBase} ${inputFocusClass} resize-none ${errors.message ? "ring-2 ring-red-500" : ""}`}
          style={inputStyle}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1.5 text-xs flex items-center gap-1"
            style={{ color: "#f87171" }}
          >
            <AlertCircle size={12} aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background:
            submitStatus === "success"
              ? "#16a34a"
              : "var(--color-accent)",
          color: "#fff",
        }}
        aria-live="polite"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span
              className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : submitStatus === "success" ? (
          <>
            <CheckCircle size={16} aria-hidden="true" />
            Message sent!
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      {/* Error state */}
      {submitStatus === "error" && (
        <p
          role="alert"
          className="text-sm text-center flex items-center justify-center gap-1.5"
          style={{ color: "#f87171" }}
        >
          <AlertCircle size={14} aria-hidden="true" />
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
