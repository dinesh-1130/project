import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RegistrationFinal() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-12 font-['Lato'] bg-gradient-to-br from-[#5B853A] via-[#7B941C] to-[#A4C255] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

        {/* LEFT SIDE: U-shape pinned to top */}
        <div className="relative w-[300px] h-[500px] flex-shrink-0" data-aos="fade-right">
          <img
            src="/assets/m-2.png"
            alt="Left U"
            className="absolute top-[-120px] left-0 w-full h-full object-contain z-10"
          />
          <img
            src="/assets/m-3.png"
            alt="Statue"
            className="absolute top-[-110px] left-0 w-full h-full object-contain z-20 ml-2"
          />
        </div>

        {/* CENTER TEXT */}
        <div className="flex-1 text-center md:text-left px-4 z-30" data-aos="zoom-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Registrations are <br /> now open for <br /> JuristQuest 2025
          </h1>
          <p className="text-gray-100 text-sm md:text-base mb-8 leading-relaxed">
            This year, we invite law students from across South India <br />
            to compete, collaborate, and connect through dynamic <br />
            rounds, workshops, and immersive legal experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="font-semibold text-white border-b border-white pb-1 inline-block mb-2 text-sm sm:text-base">
                Who can register?
              </h4>
              <p className="text-gray-100 text-sm mt-1">
                Students currently enrolled in 3-year or 5-year law programs from recognized South Indian law colleges.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="font-semibold text-white border-b border-white pb-1 inline-block mb-2 text-sm sm:text-base">
                What’s in it for you?
              </h4>
              <p className="text-gray-100 text-sm mt-1">
                Participate in challenging rounds, gain insights from expert-led workshops, access the Legal Immersion Program.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: U-shape pinned to bottom */}
        <div className="relative w-[300px] h-[500px] flex-shrink-0" data-aos="fade-left">
          <img
            src="/assets/m-4.png"
            alt="Right U"
            className="absolute top-[120px] left-0 w-full h-full object-contain z-10"
          />
          <img
            src="/assets/m-1.png"
            alt="Gavel"
            className="absolute top-[120px] left-0 w-full h-full object-contain z-20 ml-2"
          />
        </div>

      </div>
    </section>
  );
}
