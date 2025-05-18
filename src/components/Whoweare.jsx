// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function WhoWeAre() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
// <section className="bg-white py-20 font-['Lato']">
//   <div className="max-w-4xl mx-auto px-4 text-center">
//     <p className="text-purple-700 text-sm font-semibold mb-2">Registrations</p>
//     <h2 className="text-3xl font-bold mb-10">JuristQuest 2025 Is Now Open for All South Indian Law Colleges</h2>
//   </div>

//   <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
//     {/* Eligibility Card */}
//     <div data-aos="zoom-in" className="bg-purple-700 text-white p-8 rounded-2xl shadow-xl">
//       <h3 className="text-xl font-bold mb-4">Eligibility</h3>
//       <p className="text-sm leading-relaxed mb-6">
//         Law students enrolled in 3-year or 5-year programs from recognized law colleges across South India.
//       </p>
//       <a href="/register" className="inline-block bg-white text-purple-700 px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition">
//         Register now
//       </a>
//     </div>

//     {/* Benefits Card */}
//     <div data-aos="zoom-in" data-aos-delay="200" className="bg-gray-100 text-gray-800 p-8 rounded-2xl shadow-xl">
//       <h3 className="text-xl font-bold text-purple-700 mb-4">Registration Benefits</h3>
//       <ul className="text-sm space-y-3 leading-relaxed">
//         <li>✔ Access to competition rounds</li>
//         <li>✔ Legal Immersion Program eligibility</li>
//         <li>✔ Expert-led legal workshops</li>
//         <li>✔ Certificates for all + awards for winners</li>
//       </ul>
//       <a href="/register" className="inline-block mt-6 bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800 transition">
//         Register now
//       </a>
//     </div>
//   </div>
// </section>

//   );
// }
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserGraduate, FaTrophy, FaBookOpen, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";

export default function RegisterInfo() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-24 px-6 font-['Lato']">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-purple-700 text-sm uppercase font-semibold mb-2">JURISTQUEST 2025</p>
        <h2 className="text-4xl font-bold text-gray-800">Unlock Your Legal Journey</h2>
        <p className="text-gray-600 mt-2">Join the South’s Premier Moot Court Challenge for Budding Legal Minds</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start relative">
        {/* Divider Line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-purple-200"></div>

        {/* Eligibility */}
        <div data-aos="fade-right" className="text-center px-6">
          <div className="bg-purple-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
            <FaUserGraduate className="text-purple-700 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-purple-700 mb-4">Eligibility</h3>
          <p className="text-gray-700 mb-6 text-sm">
            Open to law students enrolled in 3-year or 5-year programs across South India, studying in recognized institutions.
          </p>
          <a href="/register" className="inline-block border border-purple-700 text-purple-700 px-6 py-2 rounded hover:bg-purple-700 hover:text-white transition font-medium">
            Register Now
          </a>
        </div>

        {/* Benefits */}
        <div data-aos="fade-left" className="text-center px-6">
          <div className="bg-purple-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
            <FaTrophy className="text-purple-700 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-purple-700 mb-6">Benefits</h3>
          <div className="grid grid-cols-2 gap-4 justify-center text-left text-sm text-gray-700 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-purple-600" />
              Access to competition rounds
            </div>
            <div className="flex items-center gap-2">
              <FaCertificate className="text-purple-600" />
              Legal Immersion Program
            </div>
            <div className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-purple-600" />
              Expert-led workshops
            </div>
            <div className="flex items-center gap-2">
              <FaTrophy className="text-purple-600" />
              Awards & Certificates
            </div>
          </div>
          <a href="/register" className="inline-block mt-6 border border-purple-700 text-purple-700 px-6 py-2 rounded hover:bg-purple-700 hover:text-white transition font-medium">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
