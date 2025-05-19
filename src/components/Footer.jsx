import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-white pt-16 pb-8 px-6 font-['Lato']"
      style={{ color: "#7B941C", borderTop: "1px solid #DDE7C1" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="space-y-4">
          <img
            src="/assets/new-logo-2.png"
            alt="JuristQuest Logo"
            className="w-40 mb-2"
          />
          <p className="text-sm text-gray-700 max-w-xs">
            JuristQuest is a premier moot court competition created to elevate the standards.
          </p>
          <div className="flex gap-4 mt-4 text-base">
            <a
              href="#"
              className="transition"
              style={{ color: "#7B941C" }}
              onMouseOver={(e) => (e.target.style.color = "#5a7600")}
              onMouseOut={(e) => (e.target.style.color = "#7B941C")}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="transition"
              style={{ color: "#7B941C" }}
              onMouseOver={(e) => (e.target.style.color = "#5a7600")}
              onMouseOut={(e) => (e.target.style.color = "#7B941C")}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="transition"
              style={{ color: "#7B941C" }}
              onMouseOver={(e) => (e.target.style.color = "#5a7600")}
              onMouseOut={(e) => (e.target.style.color = "#7B941C")}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="transition"
              style={{ color: "#7B941C" }}
              onMouseOver={(e) => (e.target.style.color = "#5a7600")}
              onMouseOut={(e) => (e.target.style.color = "#7B941C")}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Center Column */}
        <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2">
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <span style={{ color: "#7B941C" }}>•</span> QUICK LINKS
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/register">Registrations</a></li>
              <li><a href="/rules">Rules & Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:invisible">&nbsp;</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/sponsorship">Sponsorship</a></li>
              <li><a href="/faqs">FAQ's</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-sm">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <FaPhoneAlt style={{ color: "#7B941C" }} />
            CONTACT US
          </h4>
          <div className="flex items-start gap-3 text-black">
            <FaPhoneAlt className="mt-1" style={{ color: "#7B941C" }} />
            <span>+97 79722499424</span>
          </div>
          <div className="flex items-start gap-3 text-black">
            <FaEnvelope className="mt-1" style={{ color: "#7B941C" }} />
            <span>info@juristquest.com</span>
          </div>
          <div className="flex items-start gap-3 text-black">
            <FaMapMarkerAlt className="mt-1" style={{ color: "#7B941C" }} />
            <span>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="mt-12 pt-6 text-center text-xs text-gray-500"
        style={{ borderTop: "1px solid #DDE7C1" }}
      >
        © {new Date().getFullYear()} Jurist Quest. All rights reserved.
      </div>
    </footer>
  );
}
