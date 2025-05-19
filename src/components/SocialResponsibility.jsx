import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Mr. Selvakumar",
    title: "chair committe",
    image: "/assets/profile-6.png",
  },
  {
    name: "Mr. Thangavel",
    title: "chair committe",
    image: "/assets/profile-7.png",
  },
  {
    name: "DATO' Dr. Samy DST",
    title: "chair committe",
    image: "/assets/profile-8.png",
  },
  {
    name: "Mr.Krishnakumar",
    title: "chair committe",
    image: "/assets/profile-9.jpeg",
  },
  {
    name: "Mr.Dhamodharan",
    title: "chair committe",
    image: "/assets/profile-6.png",
  },
];

export default function TeamSection() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#f3f6ec] py-24 px-6 font-['Lato']">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold mb-2" style={{ color: "#7B941C" }}>
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet the Team Behind <span style={{ color: "#7B941C" }}>JuristQuest 2025</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
            A fusion of seasoned legal minds and visionary leaders committed to delivering an extraordinary moot court experience.
          </p>
        </div>

        {/* First row: 3 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#DDE7C1] bg-[#EDF4D4]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
              <p className="text-sm" style={{ color: "#7B941C" }}>{member.title}</p>
            </div>
          ))}
        </div>

        {/* Second row: 2 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <div
              key={index + 3}
              data-aos="fade-up"
              className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#DDE7C1] bg-[#EDF4D4]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
              <p className="text-sm" style={{ color: "#7B941C" }}>{member.title}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="inline-block text-white px-6 py-3 rounded-full font-semibold transition"
            style={{ backgroundColor: "#7B941C" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#6a8700")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#7B941C")}
            onClick={() => setShowForm(true)}
          >
            Register now
          </button>
        </div>
      </section>

      {/* Modal Form */}
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
