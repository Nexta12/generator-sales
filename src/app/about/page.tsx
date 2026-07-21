import type { Metadata } from 'next';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Trusted diesel generator experts with years of industry experience.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span className="text-yellow-500">Us</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
            Trusted diesel generator experts with years of industry experience.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Who We Are */}
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Today’s Generators is a trusted provider of diesel generator solutions, specializing in sales, rentals, repairs, and servicing of Perkins diesel generators. We are committed to delivering reliable power solutions that meet the demands of residential, commercial, and industrial clients.
          </p>
        </div>

        {/* Grid for Mission, Vision, Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide dependable and cost-effective diesel generator solutions by delivering high-quality products and expert services that ensure uninterrupted power for our customers.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become a leading diesel generator solutions provider recognized for technical excellence, reliability, and long-term partnerships across multiple industries.
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Objectives</h3>
            <p className="text-slate-600 leading-relaxed">
              To consistently exceed customer expectations through quality service delivery, skilled technical support, timely response, and continuous improvement in all our operations.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
