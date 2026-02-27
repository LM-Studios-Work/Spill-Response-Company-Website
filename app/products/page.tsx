import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Spill Kits & Containment Products | SSSK Environmental Services",
  description: "Explore our wide range of spill kits, absorbents, containment, and safety products for industrial applications.",
};

export default async function ProductsPage(props: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const searchParams = await props.searchParams;
  const categoryFilter = searchParams.category;
  
  const filteredProducts = categoryFilter 
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional-grade spill control and environmental containment solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group">
                <div className="relative h-64 w-full bg-gray-100 flex items-center justify-center p-4">
                  {/* Using a placeholder visual if real image mapping is not yet done */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#FFD100] text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FFD100] transition-colors line-clamp-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {product.shortDescription}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <Link 
                      href={`/products/${product.slug}`}
                      className="text-center px-4 py-2 border-2 border-gray-200 text-gray-700 rounded hover:bg-gray-50 hover:border-gray-300 font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                    <Link 
                      href={`/enquire?product=${product.slug}`}
                      className="text-center px-4 py-2 bg-[#FFD100] text-black rounded hover:bg-yellow-500 font-bold transition-colors shadow-sm"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
