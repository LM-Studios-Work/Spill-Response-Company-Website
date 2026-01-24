export function EmergencyBanner() {
  return (
    <div className="w-full bg-primary py-4 px-4 border-t border-primary/50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
        <span className="text-2xl animate-pulse">🚨</span>
        <p className="text-black font-bold text-base sm:text-lg md:text-xl tracking-wide">
          24/7 EMERGENCY HOTLINE:{" "}
          <a href="tel:0717881312" className="text-primary-foreground font-black hover:underline">
            071 788 1312
          </a>
        </p>
        <span className="hidden md:inline text-black/50">|</span>
        <p className="text-black/80 text-sm md:text-base">Immediate Spill Response & Hazard Control</p>
      </div>
    </div>
  )
}
