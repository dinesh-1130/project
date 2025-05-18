import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative font-['Lato']">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <img
          src="/assets/new-logo-2.png"
          alt="JuristQuest Logo"
          className="h-10 w-auto"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About us</a></li>
          <li><a href="/registrations">Registrations</a></li>
          <li><a href="/rules">Rules & Guidelines</a></li>
          <li><a href="/sponsorship">Sponsorship</a></li>
          <li><a href="/faqs">FAQ’s</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>

        {/* Register Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/register"
            className=" bg-[#6B21A8] text-white px-5 py-2 rounded font-semibold hover:bg-[#6a8700] transition"
          >
            Register now
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden flex space-x-2">
          <div
            onClick={() => setMobileMenuOpen(true)}
            className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white text-black p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img src="/assets/new-logo.png" alt="Logo" className="h-10" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 border border-black rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="space-y-6 text-lg font-semibold">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus" onClick={() => setMobileMenuOpen(false)}>About us</a></li>
            <li><a href="/registrations" onClick={() => setMobileMenuOpen(false)}>Registrations</a></li>
            <li><a href="/rules" onClick={() => setMobileMenuOpen(false)}>Rules & Guidelines</a></li>
            <li><a href="/sponsorship" onClick={() => setMobileMenuOpen(false)}>Sponsorship</a></li>
            <li><a href="/faqs" onClick={() => setMobileMenuOpen(false)}>FAQ’s</a></li>
            <li><a href="/contactus" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
            <li>
              <a
                href="/register"
                className="inline-block mt-4 bg-[#7A9A01] text-white px-6 py-2 rounded font-semibold hover:bg-[#6a8700] transition"
              >
                Register now
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
