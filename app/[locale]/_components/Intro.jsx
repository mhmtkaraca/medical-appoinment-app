import React from "react";
import "animate.css";

const HeroSection = () => (
  <section className="bg-white py-16 px-6">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">
        Your Treatment Advisor
      </h1>
      
      <ul className="space-y-4 text-lg sm:text-xl md:text-2xl mb-6 text-primary font-light">
        <li className="animate__animated animate__fadeIn animate__delay-1.1s animate__fadeInUp">
          Find the right medical solution wherever you are
        </li>
        <li className="animate__animated animate__fadeIn animate__delay-1.2s animate__fadeInUp">
          TOP-rated hospitals and doctors
        </li>
        <li className="animate__animated animate__fadeIn animate__delay-1.4s animate__fadeInUp">
          Expert medical advisory board
        </li>
        <li className="animate__animated animate__fadeIn animate__delay-1.6s animate__fadeInUp">
          Statistics-based choice
        </li>
        <li className="animate__animated animate__fadeIn animate__delay-1.8s animate__fadeInUp">
          Door-to-door service
        </li>
      </ul>
    </div>
  </section>
);

export default HeroSection;
