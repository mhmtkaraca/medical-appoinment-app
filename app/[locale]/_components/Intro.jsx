import React from 'react';

const TreatmentAdvisor = () => {
  return (
    <div className="font-sans text-gray-800 px-6 md:px-12 lg:px-56 py-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Your Treatment Advisor
      </h1>
      <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-8">
        <strong>Find the right medical solution wherever you are</strong>
      </p>
      <ul className="list-disc pl-6 md:pl-10 space-y-4 text-base md:text-lg lg:text-xl">
        <li>TOP-rated hospitals and doctors</li>
        <li>Expert medical advisory board</li>
        <li>Statistics-based choice</li>
        <li>Door-to-door service</li>
      </ul>
    </div>
  );
};

export default TreatmentAdvisor;
