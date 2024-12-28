import React from 'react';

const Steps = () => {
  const steps = [
    {
      title: 'Tell us about your case',
      description: 'Connect with our high-qualified patient manager, describe your problem, and start to work.',
    },
    {
      title: 'Get relevant treatment options',
      description: 'Our medical advisory board makes a thought-out medical conclusion and finds suitable solutions.',
    },
    {
      title: 'Receive an action plan',
      description: 'You make the task — we analyze the reports and other multiple data and organize a consultation with experts for your disease.',
    },
    {
      title: 'Draw up an agreement',
      description: 'And stay ready to start your medical journey with HealthClinic, with complete support from our travel manager.',
    },
  ];

  return (
    <div className="flex justify-between gap-6 p-6 overflow-x-auto">
      {steps.map((step, index) => (
        <div
          key={index}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-1/4 min-w-[200px] text-center"
        >
          <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
