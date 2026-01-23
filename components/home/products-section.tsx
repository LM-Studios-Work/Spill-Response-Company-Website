import Image from "next/image"

export function ProductsSection() {
  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden" id="products">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <span className="material-icons text-9xl">science</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">
              Premium Spill Control Products
            </h2>
            <p className="text-gray-200 mb-8 text-lg">
              Beyond services, we supply industry-leading spill control equipment. Ensure your facility is prepared for
              any incident.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3">check_circle</span>
                <div>
                  <strong className="block text-accent">Mobile Spill Kits</strong>
                  <span className="text-sm text-gray-300">Wheelie bin kits ranging from 25L to 240L.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3">check_circle</span>
                <div>
                  <strong className="block text-accent">Specialized Absorbents</strong>
                  <span className="text-sm text-gray-300">
                    Oil-only, chemical, and universal absorbent pads and booms.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-accent mr-3">check_circle</span>
                <div>
                  <strong className="block text-accent">Bio-remediation Agents</strong>
                  <span className="text-sm text-gray-300">Eco-friendly cleaning agents for soil restoration.</span>
                </div>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-white text-primary font-bold px-8 py-3 rounded hover:bg-gray-100 transition"
            >
              Shop Products
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-2xl transform rotate-3 z-10 w-72 h-72 flex items-center justify-center">
                <Image
                  src="/spillkit.jpeg?height=250&width=250"
                  alt="Spill Kit"
                  width={250}
                  height={250}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-accent text-black font-bold rounded-full w-24 h-24 flex items-center justify-center text-center text-xs p-2 shadow-lg z-20">
                Best Seller 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
