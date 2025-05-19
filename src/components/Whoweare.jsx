import { useState } from "react";

export default function RegisterInfo() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Main Section */}
      <section className="bg-white py-24 px-6 font-['Lato']">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm uppercase font-semibold mb-2 text-[#7B941C]">JURISTQUEST 2025</p>
          <h2 className="text-4xl font-bold text-gray-800">Unlock Your Legal Journey</h2>
          <p className="text-gray-600 mt-2">
            Join the South’s Premier Moot Court Challenge for Budding Legal Minds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#DDE7C1]"></div>

          <div data-aos="fade-right" className="text-center px-6">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 bg-[#EDF4D4]">
              <i className="fas fa-user-graduate text-[#7B941C] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#7B941C] mb-4">Eligibility</h3>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Open to law students enrolled in <br />
              3-year or 5-year programs across South India, <br />
              studying in recognized institutions.
            </p>
          </div>

          <div data-aos="fade-left" className="text-center px-6">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 bg-[#EDF4D4]">
              <i className="fas fa-trophy text-[#7B941C] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#7B941C] mb-6">Benefits</h3>
            <div className="grid grid-cols-2 gap-4 justify-center text-left text-sm text-gray-700 max-w-md mx-auto">
              <div className="flex items-center gap-2"><i className="fas fa-book-open text-[#7B941C]" /> Access to competition rounds</div>
              <div className="flex items-center gap-2"><i className="fas fa-certificate text-[#7B941C]" /> Legal Immersion Program</div>
              <div className="flex items-center gap-2"><i className="fas fa-chalkboard-teacher text-[#7B941C]" /> Expert-led workshops</div>
              <div className="flex items-center gap-2"><i className="fas fa-award text-[#7B941C]" /> Awards & Certificates</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowForm(true)}
            className="border px-6 py-2 rounded transition font-medium text-[#7B941C] border-[#7B941C] hover:bg-[#7B941C] hover:text-white"
          >
            Register Now
          </button>
        </div>
      </section>

      {/* Modal Backdrop */}
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

            {/* Close button */}
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
