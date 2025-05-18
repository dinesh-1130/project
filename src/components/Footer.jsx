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
    <footer className="bg-white text-purple-800 pt-16 pb-8 px-6 font-['Lato'] border-t border-purple-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="space-y-4">
          <img src="/assets/new-logo-2.png" alt="JuristQuest Logo" className="w-40 mb-2" />
          <p className="text-sm text-gray-700 max-w-xs">
            JuristQuest is a premier moot court competition created to elevate the standards.
          </p>
          <div className="flex gap-4 mt-4 text-purple-700 text-base">
            <a href="#" className="hover:text-purple-900 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-900 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-900 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-purple-900 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Center Column */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <span className="text-purple-600">•</span> QUICK LINKS
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/register">Registrations</a></li>
              <li><a href="/rules">Rules & Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 invisible md:visible">&nbsp;</h4>
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
            <FaPhoneAlt className="text-purple-600" />
            CONTACT US
          </h4>
          <div className="flex items-start gap-3 text-black">
            <FaPhoneAlt className="mt-1 text-purple-600" />
            <span>+97 79722499424</span>
          </div>
          <div className="flex items-start gap-3 text-black">
            <FaEnvelope className="mt-1 text-purple-600" />
            <span>info@juristquest.com</span>
          </div>
          <div className="flex items-start gap-3 text-black">
            <FaMapMarkerAlt className="mt-1 text-purple-600" />
            <span>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 text-center text-xs text-gray-500 border-t border-purple-100">
        © {new Date().getFullYear()} Jurist Quest. All rights reserved.
      </div>
    </footer>
  );
}
