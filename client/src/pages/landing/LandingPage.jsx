import React from "react";

// import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import DemoStartups from "./DemoStartups";
import Testimonials from "./Testimonials";
import UserStartupPreview from "./UserStartupPreview";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import AudienceSection from "./AudienceSection";

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="h-[72px] md:h-[80px]"></div>
      <HeroSection />
      <AudienceSection></AudienceSection>
      <FeaturesSection />
      <HowItWorks />
      <DemoStartups />
      <Testimonials />
      <UserStartupPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;