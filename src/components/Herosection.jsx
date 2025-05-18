import { useRef } from "react";

export default function HeroSection() {
  const scrollRef = useRef(null);

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
      {/* Background Image */}
      <img
        src="/assets/hero-11.png"
        loading="lazy"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-8 lg:px-20 pt-20 max-w-5xl text-white">
        <div className="text-center md:text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to “Jurist Quest – 2025”
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl mb-6">
            India’s Most Ambitious Moot Court Challenge Begins Here...
          </p>

          {/* Subtext in Two Lines */}
          <p className="text-sm sm:text-base leading-relaxed mb-1">
            Conceptualized and developed by Crosby Law Associates and RK Legal Partners,
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            in association with the
          </p>

          {/* Register Button */}
          <a href="/register">
            <button className="bg-[#6B21A8] text-white px-6 py-3 mt-2 rounded font-semibold hover:bg-[#6a8700] transition">
              Register now
            </button>
          </a>
        </div>
      </div>

      {/* Optional Scroll Ref */}
      <div ref={scrollRef} className="h-[1px]" />
    </section>
  );
}
