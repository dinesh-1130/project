import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaEye, FaGavel } from "react-icons/fa";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Vision */}
      <div
        data-aos="fade-up"
        className="relative bg-white rounded-2xl shadow-lg pt-16 pb-10 px-6 text-center border-t-[8px]"
        style={{ borderTopColor: "#7B941C" }}
      >
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md"
          style={{ backgroundColor: "#7B941C" }}
        >
          <FaEye />
        </div>
        <h3 className="text-xl font-semibold mb-4" style={{ color: "#7B941C" }}>
          Our Vision
        </h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          To establish JuristQuest as India’s most prestigious moot court competition, recognized nationally and internationally for excellence in legal advocacy and education.
        </p>
        <a
          href="/register"
          className="font-medium hover:underline"
          style={{ color: "#7B941C" }}
        >
          Register now
        </a>
      </div>

      {/* Mission */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="relative bg-white rounded-2xl shadow-lg pt-16 pb-10 px-6 text-center border-t-[8px]"
        style={{ borderTopColor: "#7B941C" }}
      >
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md"
          style={{ backgroundColor: "#7B941C" }}
        >
          <FaBullseye />
        </div>
        <h3 className="text-xl font-semibold mb-4" style={{ color: "#7B941C" }}>
          Our Mission
        </h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          To provide a competitive, structured environment that sharpens students’ skills in legal research, drafting and oral advocacy through real-world simulations.
        </p>
        <a
          href="/register"
          className="font-medium hover:underline"
          style={{ color: "#7B941C" }}
        >
          Register now
        </a>
      </div>

      {/* What We Do */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative bg-white rounded-2xl shadow-lg pt-16 pb-10 px-6 text-center border-t-[8px]"
        style={{ borderTopColor: "#7B941C" }}
      >
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md"
          style={{ backgroundColor: "#7B941C" }}
        >
          <FaGavel />
        </div>
        <h3 className="text-xl font-semibold mb-4" style={{ color: "#7B941C" }}>
          What we do
        </h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          We offer national exposure, global immersion programs (Singapore & Malaysia – 2025), and networking with senior advocates, judges, and legal scholars.
        </p>
        <a
          href="/register"
          className="font-medium hover:underline"
          style={{ color: "#7B941C" }}
        >
          Register now
        </a>
      </div>
    </div>
  );
};

export default VisionMission;
