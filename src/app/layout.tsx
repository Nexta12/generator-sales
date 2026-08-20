import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import FacebookPixel from '@/components/FacebookPixel';
import NextTopLoader from 'nextjs-toploader';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.todaysgenerators.com'),
  title: {
    default: "Today's Generators | Premium Diesel Generators",
    template: "%s | Today's Generators"
  },
  description: 'Sales, rentals, repairs, and servicing of all types of fairly used UK Perkins diesel generators, all across Nigeria. Secure cash on delivery orders.',
  keywords: [
    'diesel generator',
    'perkins generator',
    'generator sales nigeria',
    'generator rental',
    'generator repair',
    'fairly used generator',
    'heavy duty generator',
    'industrial generator',
    'commercial generator',
    'cash on delivery generators Nigeria'
  ],
  authors: [{ name: "Today's Generators Co." }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Today's Generators | Premium Diesel Generators",
    description: 'Sales, rentals, repairs, and servicing of all types of fairly used UK Perkins diesel generators, all across Nigeria. Secure cash on delivery orders.',
    url: 'https://www.todaysgenerators.com',
    siteName: "Today's Generators",
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Today's Generators | Premium Diesel Generators",
    description: 'Sales, rentals, repairs, and servicing of all types of fairly used UK Perkins diesel generators, all across Nigeria. Secure cash on delivery orders.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SEO Structured Data (JSON-LD) for LocalBusiness, Organization, and Website
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.todaysgenerators.com/#website',
        'url': 'https://www.todaysgenerators.com',
        'name': "Today's Generators",
        'description': 'Premium Diesel Generators',
        'publisher': {
          '@id': 'https://www.todaysgenerators.com/#organization'
        },
        'potentialAction': [
          {
            '@type': 'SearchAction',
            'target': 'https://www.todaysgenerators.com/products?search={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        ]
      },
      {
        '@type': 'Store',
        '@id': 'https://www.todaysgenerators.com/#organization',
        'name': "Today's Generators",
        'url': 'https://www.todaysgenerators.com',
        'logo': 'https://www.todaysgenerators.com/h-1.png',
        'image': 'https://www.todaysgenerators.com/h-1.png',
        'description': 'Sales, rentals, repairs, and servicing of all types of fairly used UK Perkins diesel generators, all across Nigeria. Secure cash on delivery orders.',
        'telephone': '+234 703 013 6756',
        'priceRange': '₦₦-₦₦₦₦₦₦',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Order Hotline Address',
          'addressLocality': 'Lagos',
          'addressRegion': 'Lagos State',
          'addressCountry': 'NG'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '6.5244',
          'longitude': '3.3792'
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          'opens': '08:00',
          'closes': '18:00'
        }
      }
    ]
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
        <NextTopLoader color="#eab308" height={3} showSpinner={false} />
        <FacebookPixel />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
