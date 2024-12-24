import React from "react";

const reasons = [
  {
    title: "Medical experts",
    description:
      "You contact doctors who review your case. After that, our advisory board chooses the best treatment option and clinic for you.",
    icon: "👨‍⚕️", // İkon yerine SVG veya resim kullanabilirsiniz.
  },
  {
    title: "Direct partners",
    description:
      "Health Clinic continues a partnership with TOP clinics worldwide to offer the most reasonable prices for international patients.",
    icon: "🤝",
  },
  {
    title: "Certified company",
    description:
      "IMTJ (International Medical Travel Journal) and Temos (International Healthcare Accreditation) confirm our level of service.",
    icon: "🏆",
  },
  {
    title: "Additional insurance",
    description:
      "We provide an extra guarantee if unexpected expenses during the treatment appear. It is included in the price package.",
    icon: "📜",
  },
];

const ReasonsToChoose = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Reasons to choose Health Clinic
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToChoose;
