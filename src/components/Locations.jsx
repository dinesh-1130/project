import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaRegHandshake } from "react-icons/fa";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-6 font-['Lato']">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Contact Info */}
        <div data-aos="fade-right" className="space-y-6">
          <p className="text-sm text-purple-600 font-semibold uppercase tracking-wide">
            Registrations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out to our coordination team for queries related to participation, sponsorship, or support.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">
              <FaEnvelope className="text-purple-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">General Email</p>
                <p className="font-medium text-gray-800">info@juristquest.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">
              <FaRegHandshake className="text-purple-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Partnership</p>
                <p className="font-medium text-gray-800">partners@juristquest.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">
              <FaPhoneAlt className="text-purple-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800">+91 2749249729</p>
              </div>
            </div>

            <a
              href="/register"
              className="inline-block mt-4 bg-purple-700 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div
          className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Fill the Form</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="text"
              placeholder="Full Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="text"
              placeholder="District"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
