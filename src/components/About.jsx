import { useNavigate } from "react-router-dom";
import BannerBg from "/assets/hero-17.jpg";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col lg:flex-row gap-6 xl:gap-20 lg:px-10 px-5">
      <div className="flex items-start flex-col gap-6 max-w-[300px] w-full">
        <div
          data-aos="fade-right"
          className="border px-4 py-2 rounded-xl font-medium lg:text-2xl text-purple-700"
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
          Welcome to <span className="text-purple-700">“Jurist Quest – 2025”</span>
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
            className="rounded bg-purple-700 hover:bg-[#6a8700] text-white px-6 py-3 font-semibold transition"
            onClick={() => navigate("/register")}
          >
            Register now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
