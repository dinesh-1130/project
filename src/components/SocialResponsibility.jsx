import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie } from "react-icons/fa"; // Avatar icon

const teamMembers = [
  {
    name: "Mr. Selvakumar",
    title: "Director",
  },
  {
    name: "Mr. Thangavel",
    title: "Executive Director",
  },
  {
    name: "DATO' Dr. Samy DST",
    title: "Independent Director",
  },
  {
    name: "Mr. Selvakumar",
    title: "Director",
  },
  {
    name: "Mr. Selvakumar",
    title: "Director",
  },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-24 px-6 font-['Lato']">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-purple-700 text-sm font-semibold mb-2">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet the Team Behind <span className="text-purple-700">JuristQuest 2025</span>
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
            <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center rounded-full border-4 border-purple-100 bg-purple-200 text-purple-800">
              <FaUserTie className="text-4xl" />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
            <p className="text-sm text-purple-700">{member.title}</p>
          </div>
        ))}
      </div>

      {/* Second row: 2 members centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {teamMembers.slice(3).map((member, index) => (
          <div
            key={index + 3}
            data-aos="fade-up"
            className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center"
          >
            <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center rounded-full border-4 border-purple-100 bg-purple-200 text-purple-800">
              <FaUserTie className="text-4xl" />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
            <p className="text-sm text-purple-700">{member.title}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/register"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
        >
          Register now
        </a>
      </div>
    </section>
  );
}
