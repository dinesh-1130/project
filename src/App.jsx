

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Herosection from "./components/Herosection";
import SocialMediaSection from './components/SocialMediaSection';
// import Posts from './components/Posts';
import Locations from './components/Locations';
import OurSolutions from "./components/OurSolutions";
import SocialResponsibility from "./components/SocialResponsibility";
import SuccessStories from "./components/SuccessStories";
import About from "./components/About";
import TrustedBy from "./components/TrustedBy";

// Inner Pages
import EnterpriseSystemsGroup from "./components/InnerPages/EnterpriseSystemsGroup";
import AVSolutions from "./components/InnerPages/AVSolutions";
import CyberSecurityServices from "./components/InnerPages/CyberSecurityServices";
import InformationSecurity from "./components/InnerPages/InformationSecurity";
import InfrastructureSystemsGroup from "./components/InnerPages/InfrastructureSystemsGroup";
import IoTServices from "./components/InnerPages/IoTServices";
import PowerSolutions from "./components/InnerPages/PowerSolutions";
import ProfessionalITServices from "./components/InnerPages/ProfessionalITServices";
import SecuritySystems from "./components/InnerPages/SecuritySystems";
import SoftwareDevelopment from "./components/InnerPages/SoftwareDevelopment";
import WebsiteDevelopment from "./components/InnerPages/WebsiteDevelopment";
import Contactus from "./components/InnerPages/Contactus";
import Aboutus from "./components/InnerPages/Aboutus"
import Partners from "./components/Partners"
import { useEffect } from "react";
import TermsAndConditions from "./components/InnerPages/TermsAndConditions";
import PrivacyPolicy from "./components/InnerPages/PrivacyPolicy";
import Brochure from "./components/InnerPages/Brochure"

import Whoweare from "./components/Whoweare"
import WhyChooseUs from "./components/InnerPages/Whychooseus";

function Home() {
  return (
    <>
      <Herosection />
      <div id="about">
        <About />
      </div>
      <TrustedBy />
       <Whoweare />
      <OurSolutions />
         <SuccessStories />
      <SocialResponsibility />
   
     
      <SocialMediaSection />
      {/* <Posts /> */}
      <Locations />
      <Partners />
    </>
  );
}




export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}
>
      <div className="min-h-screen w-full overflow-x-hidden bg-white relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise-systems-group" element={<EnterpriseSystemsGroup />} />
          <Route path="/avsolutions" element={<AVSolutions />} />
          <Route path="/cybersecurityservices" element={<CyberSecurityServices />} />
          <Route path="/informationsecurity" element={<InformationSecurity />} />
          <Route path="/infrastructuresystemgroup" element={<InfrastructureSystemsGroup />} />
          <Route path="/iotservices" element={<IoTServices />} />
          <Route path="/powersolutions" element={<PowerSolutions />} />
          <Route path="/professionalitservices" element={<ProfessionalITServices />} />
          <Route path="/securitysystems" element={<SecuritySystems />} />
          <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
          <Route path="/websitedevelopment" element={<WebsiteDevelopment />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={< Aboutus/>} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        </Routes>
     
          <Footer />
        
      </div>
    </Router>
  );
}
