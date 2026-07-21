import ProductsClient from './ProductsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Today's Generators Catalog | Premium Diesel Generators",
  description: "Explore the full Today's Generators industrial catalog. Find heavy-duty UK Perkins diesel generators, and fairly used generators.",
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
