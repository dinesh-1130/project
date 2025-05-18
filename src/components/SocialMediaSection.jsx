import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaUserTie } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Chen",
    position: "Stanford Law School",
    feedback:
      "MootMarathon provided our university team with an incredible opportunity to compete internationally without the travel costs. The virtual format was surprisingly engaging.",
  },
  {
    name: "Prof. Elizabeth Taylor",
    position: "Oxford University",
    feedback:
      "As a coach, I appreciate the detailed scoring and feedback system. It helps my students understand their strengths and areas for improvement in a structured way.",
  },
  {
    name: "David Okonkwo",
    position: "University of Cape Town",
    feedback:
      "The platform's resources section is a goldmine for students. The practice materials helped our team win first place in the Commercial Law Competition.",
  },
  {
    name: "Michael Chen",
    position: "Stanford Law School",
    feedback:
      "MootMarathon provided our university team with an incredible opportunity to compete internationally without the travel costs. The virtual format was surprisingly engaging.",
  },
  {
    name: "Prof. Elizabeth Taylor",
    position: "Oxford University",
    feedback:
      "As a coach, I appreciate the detailed scoring and feedback system. It helps my students understand their strengths and areas for improvement in a structured way.",
  },
  {
    name: "David Okonkwo",
    position: "University of Cape Town",
    feedback:
      "The platform's resources section is a goldmine for students. The practice materials helped our team win first place in the Commercial Law Competition.",
  },
];

export default function SuccessStoriesSection() {
  useEffect(() => {
    AOS.init({ duration: 650, once: true });
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-gray-50 to-white py-20 px-4 md:px-20 font-sans"
      data-aos="fade-up"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-down">
        <span className="">Success</span> <span className="text-purple-700">Stories</span>
      </h2>
      <p
        className="text-center text-gray-500 mb-12 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hear from students and institutions who have participated in our moot court competitions.
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="!pb-10"
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[400px] w-full">
                <FaQuoteLeft className="text-purple-600 text-2xl absolute top-4 left-4" />
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="bg-purple-100 text-purple-700 w-16 h-16 flex items-center justify-center rounded-full border-4 border-purple-200 shadow-md">
                      <FaUserTie className="text-2xl" />
                    </div>
                  </div>
                  <h4 className="text-center text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-center text-sm text-gray-500 mb-3">{item.position}</p>
                  <div className="flex justify-center text-yellow-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-left overflow-y-auto max-h-[120px] px-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {item.feedback}
                  </p>
                </div>
                <FaQuoteRight className="text-purple-600 text-2xl absolute bottom-4 right-4" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper pagination custom styling */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #c084fc; /* purple-400 */
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background-color: #9333ea; /* purple-600 */
            opacity: 1;
            transform: scale(1.1);
          }
        `}
      </style>
    </section>
  );
}
