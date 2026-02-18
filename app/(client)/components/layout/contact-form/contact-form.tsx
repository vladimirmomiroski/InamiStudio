'use client';

import { useState } from 'react';

const initialForm = { name: '', company: '', email: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSubmitStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData(initialForm);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t scroll-mt-27.5 border-green/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-green text-extra-large mb-4 leading-tight">
            Get In Touch
          </h2>
          <p className="text-white text-medium opacity-70">
            Ready to start your project? Drop us a message and let&apos;s create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white text-small font-semibold mb-2 uppercase tracking-wide">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/7 border-2 border-white/10 rounded-lg px-4 py-3 text-white text-default focus:border-green focus:outline-none transition-colors placeholder:text-white/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-white text-small font-semibold mb-2 uppercase tracking-wide">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/7 border-2 border-white/10 rounded-lg px-4 py-3 text-white text-default focus:border-green focus:outline-none transition-colors placeholder:text-white/30"
                placeholder="Your company"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white text-small font-semibold mb-2 uppercase tracking-wide">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/7 border-2 border-white/10 rounded-lg px-4 py-3 text-white text-default focus:border-green focus:outline-none transition-colors placeholder:text-white/30"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-white text-small font-semibold mb-2 uppercase tracking-wide">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-white/7 border-2 border-white/10 rounded-lg px-4 py-3 text-white text-default focus:border-green focus:outline-none transition-colors placeholder:text-white/30 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green text-black font-bold text-default px-12 py-4 rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-green/20 uppercase tracking-wide disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="font-montserrat text-green text-small mt-4">
                Message sent successfully!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="font-montserrat text-red-500 text-small mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section >
  );
}