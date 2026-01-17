export function QuoteBanner() {
  return (
    <section className="bg-primary py-12 md:py-16 text-center px-4">
      <div className="container mx-auto max-w-4xl">
        <blockquote className="text-white">
          <p className="text-lg sm:text-xl md:text-3xl font-light italic mb-6 leading-relaxed">
            &quot;We have forgotten how to be good guests, how to walk lightly on the earth as its other creatures
            do.&quot;
          </p>
          <footer className="font-bold text-accent uppercase tracking-wider text-base sm:text-lg">
            — Barbara Ward
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
