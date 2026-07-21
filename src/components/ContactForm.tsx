'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'None provided';
    const serviceInterest = formData.get('serviceInterest');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `New Contact Form Submission: ${subject}`,
          from_name: "Today's Generators Website",
          name: fullName,
          email: email,
          phone: phone,
          service_interest: serviceInterest,
          message: message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (err) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center max-w-xl mx-auto h-full flex flex-col items-center justify-center min-h-[500px]">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h3>
        <p className="text-lg text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out to us. Your information is safe with us. One of our power specialists will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
      <p className="text-slate-500 text-sm mb-8">Fields marked with an asterisk (*) are required.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-slate-800 mb-2">Full Name *</label>
            <input 
              type="text" 
              id="fullName"
              name="fullName" 
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 bg-slate-50"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2">Email Address *</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 bg-slate-50"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 bg-slate-50"
              placeholder="+234 000 000 0000"
            />
          </div>

          <div>
            <label htmlFor="serviceInterest" className="block text-sm font-bold text-slate-800 mb-2">Service Interest *</label>
            <select 
              id="serviceInterest"
              name="serviceInterest" 
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 bg-slate-50 appearance-none"
            >
              <option value="" disabled>Choose a service...</option>
              <option value="Generator Purchase">Generator Purchase</option>
              <option value="Generator Repair">Generator Repair</option>
              <option value="Rentals">Rentals</option>
              <option value="Spare Parts">Spare Parts</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-slate-800 mb-2">Subject *</label>
          <input 
            type="text" 
            id="subject"
            name="subject" 
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 bg-slate-50"
            placeholder="How can we help you?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-2">Message *</label>
          <textarea 
            id="message"
            name="message" 
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 bg-slate-50 resize-none"
            placeholder="Tell us more about your requirements..."
          ></textarea>
        </div>

        <div className="pt-2">
          <p className="text-xs font-medium text-slate-500 mb-4 text-center">
            Your information is safe with us. We never share your data.
          </p>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
