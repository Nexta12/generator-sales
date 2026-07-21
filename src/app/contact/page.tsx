import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have questions about our generators or need a custom power solution? Our team of experts is ready to provide you with professional guidance and support.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-950 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Connect With <span className="text-yellow-500">Us</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
            Consult Our Power Specialists. Have questions about our generators or need a custom power solution? Our team of experts is ready to provide you with professional guidance and support.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Headquarters */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-amber-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Headquarters</h3>
                <p className="text-slate-600 leading-relaxed">
                  Plot 12, Industrial Layout,<br />Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-amber-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email Support</h3>
                <a href="mailto:todaysgenerators1@gmail.com" className="text-amber-600 font-medium hover:underline">
                  todaysgenerators1@gmail.com
                </a>
              </div>
            </div>

            {/* Call Center */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-amber-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Call Center</h3>
                <p className="text-slate-600 mb-1">
                  <a href="tel:+2347030136756" className="hover:text-amber-600 transition-colors">+234 7030136756</a> <span className="text-sm font-medium text-slate-400 ml-1">Office</span>
                </p>
                <p className="text-slate-600">
                  <a href="tel:+2347051450282" className="hover:text-amber-600 transition-colors">+234 7051450282</a> <span className="text-sm font-medium text-slate-400 ml-1">Technical</span>
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-amber-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Office Hours</h3>
                <p className="text-slate-600 mb-1">Monday - Friday: <span className="font-medium text-slate-800">8:00 AM - 6:00 PM</span></p>
                <p className="text-slate-600">Saturday: <span className="font-medium text-slate-800">9:00 AM - 2:00 PM</span></p>
              </div>
            </div>

            <hr className="border-slate-200 my-8" />

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="https://x.com/Todaysgenerato1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-amber-600 hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4l11.733 16h4.267l-11.733-16z"></path><path d="M4 20l6.768-6.768m2.46-2.46L20 4"></path></svg>
                </a>
                <a href="https://www.instagram.com/todaysgenerators" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-amber-600 hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.youtube.com/@todaysgenerators3932" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-amber-600 hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
            
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
