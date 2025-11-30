"use client"
import React from "react";
import styles from "./style.module.css";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full py-8 mt-3 px-4 md:px-8 lg:px-16 relative">
      
      <div className={`${styles.bgGlow}`}></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-white/80">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-white/80">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-white/80">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-white/80">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
