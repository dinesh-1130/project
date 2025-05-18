// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaBullhorn, FaHandshake, FaListUl } from "react-icons/fa";

// export default function SponsorSection() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="bg-white py-24 px-6 font-['Lato']">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Sponsorship Points */}
//         <div className="space-y-6" data-aos="fade-right">
//           {/* Item 1 */}
//           <div className="flex items-start gap-4 bg-purple-50 border-l-[6px] border-purple-700 p-6 rounded-xl shadow-sm">
//             <div className="text-purple-700 text-2xl mt-1"><FaBullhorn /></div>
//             <div>
//               <h4 className="font-semibold text-lg text-purple-700">Premier Brand Visibility</h4>
//               <p className="text-sm text-gray-700 mt-1">
//                 Gain recognition through branding, press mentions, social media campaigns, and digital promotions across all platforms.
//               </p>
//             </div>
//           </div>

//           {/* Item 2 */}
//           <div className="flex items-start gap-4 bg-purple-700 p-6 rounded-xl shadow-sm text-white" data-aos="fade-up">
//             <div className="text-white text-2xl mt-1"><FaHandshake /></div>
//             <div>
//               <h4 className="font-semibold text-lg">Meaningful Engagement</h4>
//               <p className="text-sm mt-1">
//                 Nominate speakers or judges, gain stage mentions, and connect directly with future legal professionals.
//               </p>
//             </div>
//           </div>

//           {/* Item 3 */}
//           <div className="flex items-start gap-4 bg-purple-50 border-l-[6px] border-purple-700 p-6 rounded-xl shadow-sm">
//             <div className="text-purple-700 text-2xl mt-1"><FaListUl /></div>
//             <div>
//               <h4 className="font-semibold text-lg text-purple-700">Diverse Sponsorship Options</h4>
//               <p className="text-sm text-gray-700 mt-1">
//                 Choose from Title, Associate, Knowledge, Hospitality, or International Program sponsorships tailored to your goals.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Main Message */}
//         <div data-aos="fade-left" className="text-left md:pl-10">
//           <p className="text-sm font-semibold text-purple-700 mb-2">Sponsorship</p>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Why Sponsor <br /> JuristQuest 2025?
//           </h2>
//           <p className="text-gray-700 mb-6 text-sm">
//             JuristQuest offers a strategic opportunity to associate with India’s top-tier moot court competition and connect with emerging legal leaders.
//           </p>
//           <a
//             href="/register"
//             className="bg-purple-700 text-white px-6 py-3 rounded font-semibold hover:bg-purple-800 transition"
//           >
//             Register now
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullhorn, FaHandshake, FaAward } from "react-icons/fa";

export default function SponsorSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white via-purple-50 to-white py-24 px-4 font-['Lato']">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-purple-700 text-sm font-semibold">Sponsorship</p>
        <h2 className="text-4xl font-bold text-gray-900">
          Why Sponsor <span className="text-purple-700">JuristQuest 2025?</span>
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm">
          Partner with India's premier moot court competition and gain unparalleled access to the country’s future legal minds, top-tier professionals, and media exposure.
        </p>
      </div>

      {/* Vertical Timeline Design */}
      <div className="relative max-w-4xl mx-auto space-y-10 border-l-2 border-purple-200 pl-8">
        {/* Item 1 */}
        <div data-aos="fade-up" className="relative group">
          <span className="absolute -left-5 top-1.5 w-3 h-3 bg-purple-700 rounded-full"></span>
          <div className="bg-white backdrop-blur-md border border-purple-100 rounded-xl p-6 shadow-xl group-hover:shadow-purple-200 transition">
            <div className="flex items-center gap-3 mb-2">
              <FaBullhorn className="text-purple-700 text-xl" />
              <h4 className="text-lg font-semibold text-purple-800">Premier Brand Visibility</h4>
            </div>
            <p className="text-sm text-gray-600">
              Stand out through event branding, media coverage, and digital campaigns across top legal and youth platforms.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div data-aos="fade-up" data-aos-delay="100" className="relative group">
          <span className="absolute -left-5 top-1.5 w-3 h-3 bg-purple-700 rounded-full"></span>
          <div className="bg-white backdrop-blur-md border border-purple-100 rounded-xl p-6 shadow-xl group-hover:shadow-purple-200 transition">
            <div className="flex items-center gap-3 mb-2">
              <FaHandshake className="text-purple-700 text-xl" />
              <h4 className="text-lg font-semibold text-purple-800">Meaningful Engagement</h4>
            </div>
            <p className="text-sm text-gray-600">
              Interact with students, nominate speakers or judges, and gain on-stage recognition during key moments.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative group">
          <span className="absolute -left-5 top-1.5 w-3 h-3 bg-purple-700 rounded-full"></span>
          <div className="bg-white backdrop-blur-md border border-purple-100 rounded-xl p-6 shadow-xl group-hover:shadow-purple-200 transition">
            <div className="flex items-center gap-3 mb-2">
              <FaAward className="text-purple-700 text-xl" />
              <h4 className="text-lg font-semibold text-purple-800">Custom Sponsorship Tiers</h4>
            </div>
            <p className="text-sm text-gray-600">
              Choose from diverse options — Title, Associate, Certificate, International Program and more — aligned with your brand.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="/register"
          className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
        >
          Register now
        </a>
      </div>
    </section>
  );
}
