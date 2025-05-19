import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerBg from "/assets/hero-17.jpg";

export default function About() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col lg:flex-row gap-6 xl:gap-20 lg:px-10 px-5">
        <div className="flex items-start flex-col gap-6 max-w-[300px] w-full">
          <div
            data-aos="fade-right"
            className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
            style={{ color: "#7B941C" }}
          >
            About JuristQuest
          </div>
          <div
            className="h-full max-w-[300px] w-full hidden lg:block rounded-xl overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src={BannerBg}
              loading="lazy"
              alt="Banner bg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="flex-1 flex flex-col items-start gap-[2em]"
        >
          <h2
            data-aos="fade-up"
            className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
          >
            Welcome to <span style={{ color: "#7B941C" }}>“Jurist Quest – 2025”</span>
          </h2>
          <p
            data-aos="fade-up"
            className="text-base tracking-tight font-medium text-gray-800"
          >
            India’s Most Ambitious Moot Court Challenge Begins Here...
          </p>
          <p
            data-aos="fade-up"
            className="text-base text-gray-700 font-normal leading-relaxed"
          >
            Step into the world of legal intellect and advocacy where the brightest minds compete, argue, and grow. Jurist Quest – 2025 invites aspiring lawyers from across the country to showcase their skills, gain national recognition, and engage with top legal professionals.
          </p>
          <p
            data-aos="fade-up"
            className="text-sm font-normal text-gray-600"
          >
            Conceptualized and developed by Crosby Law Associates and RK Legal Partners, in association with the country’s premier legal institutions.
          </p>
          <div className="flex justify-between items-start w-full flex-col lg:flex-row gap-8">
            <button
              data-aos="fade-up"
              style={{ backgroundColor: "#7B941C" }}
              className="rounded hover:bg-[#6a8700] text-white px-6 py-3 font-semibold transition"
              onClick={() => setShowForm(true)}
            >
              Register now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg font-['Lato'] relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fill the Form</h3>

            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg focus:ring-[#7B941C] focus:outline-none" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg focus:ring-[#7B941C] focus:outline-none" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border rounded-lg focus:ring-[#7B941C] focus:outline-none" />
              <input type="text" placeholder="Full Address" className="w-full px-4 py-3 border rounded-lg focus:ring-[#7B941C] focus:outline-none" />
              <input type="text" placeholder="District" className="w-full px-4 py-3 border rounded-lg focus:ring-[#7B941C] focus:outline-none" />
              <button type="submit" className="w-full bg-[#7B941C] text-white py-3 rounded-lg font-semibold hover:bg-[#6a8700] transition">Submit</button>
            </form>

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
