import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "AlexFilms Project Enquiry"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Service: ${formData.service}\n\n` +
        `${formData.message}`
    );

    window.location.href = `mailto:hello@alexfilms.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-12 uppercase tracking-wider">
            Let’s Work Together
          </h1>

          <div className="w-40 h-0.5 bg-white mx-auto mb-8"></div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Interested in cinematic FPV or professional videography for your
            next project? Get in touch and let's discuss your ideas.
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm uppercase tracking-widest text-gray-300 mb-3"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-transparent border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm uppercase tracking-widest text-gray-300 mb-3"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-transparent border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm uppercase tracking-widest text-gray-300 mb-3"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter a subject"
              required
              className="w-full bg-transparent border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm uppercase tracking-widest text-gray-300 mb-3"
            >
              Service
            </label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 px-4 py-4 text-white focus:outline-none focus:border-white transition"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Basic Experience">Basic Experience</option>
              <option value="Standard Package">Standard Package</option>
              <option value="Full Experience">Full Experience</option>
              <option value="High-End Production">High-End Production</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm uppercase tracking-widest text-gray-300 mb-3"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={8}
              required
              className="w-full bg-transparent border border-gray-700 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition resize-y"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-white text-black px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}