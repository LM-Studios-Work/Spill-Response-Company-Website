import { getProductBySlug, products } from "@/lib/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} | SSSK Environmental Services`,
    description: product.shortDescription,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-6">
            <Link 
              href="/products"
              className="text-gray-500 hover:text-gray-900 flex items-center gap-2 transition-colors w-max"
            >
              ← Back to Products
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:p-12 mb-12">
            {/* Image Gallery Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100 ring-1 ring-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Product Info Column */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-4">
                <span className="inline-block bg-[#FFD100] text-gray-900 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 font-display leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  {product.shortDescription}
                </p>
              </div>

              <div className="w-16 h-1 bg-[#FFD100] my-6 rounded" />

              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-6 h-6 text-[#FFD100] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/enquire?product=${product.slug}`}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-xl">payments</span>
                  Request Pricing
                </Link>
                <a
                  href="tel:0717881312"
                  className="flex-none bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-900 text-center font-bold text-lg py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-xl text-[#FFD100]">phone</span>
                  Call Us
                </a>
              </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-12 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display flex items-center gap-3">
              <span className="material-icons text-[#FFD100]">settings</span>
              Technical Specifications
            </h2>
            
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <th className="py-4 px-6 font-semibold text-gray-900 border-b border-gray-200 w-1/3">
                        {spec.label}
                      </th>
                      <td className="py-4 px-6 text-gray-700 border-b border-gray-200 w-2/3">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
