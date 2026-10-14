import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  Linkedin,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { profileData } from "../data/profile";

export const Contact: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Provide immediate functional transmission via mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
        `[Portfolio Inbound: ${formData.subject}] from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 700);
  };

  const handleCopy = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Contact Information and Inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-[#48E6FF] uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Networking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk'] mb-3">
            Have an idea? Let's connect<span className="text-[#48E6FF]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I'm always interested in connecting with people who enjoy technology, problem-solving, and building meaningful things.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: 3 Verified Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-5 rounded-2xl bg-[#0B1220]/80 border border-slate-800 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#48E6FF] group-hover:-translate-y-1 transition-transform duration-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                      className="text-base font-semibold text-white hover:text-cyan-400 font-mono transition-colors"
                    >
                      {profileData.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.contact.phone, "phone")}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group p-5 rounded-2xl bg-[#0B1220]/80 border border-slate-800 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#48E6FF] group-hover:-translate-y-1 transition-transform duration-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Electronic Mail
                    </span>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="text-base font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.contact.email, "email")}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group p-5 rounded-2xl bg-[#0B1220]/80 border border-slate-800 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#48E6FF] group-hover:-translate-y-1 transition-transform duration-200">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Professional Network
                    </span>
                    <span className="text-base font-semibold text-white block">
                      Ayush Kumar
                    </span>
                  </div>
                </div>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600/20 text-cyan-300 hover:bg-blue-600/30 border border-cyan-400/30 transition-colors"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Fast Summary Note */}
            <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-900 text-xs text-slate-400 space-y-2">
              <div className="text-slate-300 font-semibold font-['Space_Grotesk']">
                Availability & Location:
              </div>
              <p>
                Currently based in Raipur, Chhattisgarh. Open to summer internship opportunities, collaborative student projects, and open-source contributions.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1220]/80 border border-slate-800 backdrop-blur-md shadow-2xl">
              
              {isSuccess ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Your email client has been dispatched with your message to Ayush Kumar ({profileData.contact.email}).
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-slate-800 focus:border-[#48E6FF]"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-slate-800 focus:border-[#48E6FF]"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Internship Inquiry / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-slate-800 focus:border-[#48E6FF]"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your note or project requirements here..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-slate-800 focus:border-[#48E6FF]"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#4388FF] to-[#2563EB] hover:from-[#3B82F6] hover:to-[#1D4ED8] rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-98 cursor-pointer border border-cyan-400/30 disabled:opacity-60"
                  >
                    <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] font-mono text-slate-500 mt-2">
                    Directly pre-populates your email client to reach ayushkr82678@gmail.com securely.
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
