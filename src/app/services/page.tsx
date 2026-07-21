import type { Metadata } from 'next';
import { ShoppingCart, Wrench, Clock, Settings, PackageOpen } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Sales, rentals, repairs, and maintenance of diesel generators',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Generator Sales',
      description: 'We supply high-quality fairly used UK Perkins diesel generators that are carefully inspected, tested, and certified to deliver reliable power performance for residential, commercial, and industrial applications.',
      icon: ShoppingCart,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      title: 'Repairs',
      description: 'Our skilled technicians diagnose and repair diesel generators efficiently, resolving mechanical and electrical faults to restore optimal performance and minimize operational downtime.',
      icon: Wrench,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Generator Rentals',
      description: 'We offer flexible diesel generator rental solutions for short-term and long-term needs, providing dependable power support for events, construction projects, and emergency backup situations.',
      icon: Clock,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
    {
      title: 'Servicing & Maintenance',
      description: 'Routine servicing and preventive maintenance ensure your generator operates efficiently, reduces fuel consumption, and extends equipment lifespan through scheduled inspections and professional care.',
      icon: Settings,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
    {
      title: 'Genuine Spare Parts',
      description: 'We supply genuine Perkins spare parts to guarantee compatibility, durability, and optimal performance, helping clients maintain generator reliability and avoid costly breakdowns.',
      icon: PackageOpen,
      color: 'text-rose-600',
      bgColor: 'bg-rose-100',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our <span className="text-yellow-500">Services</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
            Sales, rentals, repairs, and maintenance of diesel generators
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Reliable power solutions tailored to your operational needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300 group">
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.bgColor} ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
