import React from 'react';

const TreatmentAdvisor = () => {
  return (
    <div className="bg-gray-50 rounded-lg max-w-6xl mx-auto p-10 sm:p-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Your Treatment Advisor
        </h1>
        <p className="text-xl sm:text-2xl text-blue-600 font-medium">
          Find the right medical solution wherever you are
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <li className="flex items-center bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">
            🌟
          </div>
          <p className="ml-6 text-gray-700 font-medium text-lg">
            TOP-rated hospitals and doctors
          </p>
        </li>

        <li className="flex items-center bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">
            👩‍⚕️
          </div>
          <p className="ml-6 text-gray-700 font-medium text-lg">
            Expert medical advisory board
          </p>
        </li>

        <li className="flex items-center bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">
            📊
          </div>
          <p className="ml-6 text-gray-700 font-medium text-lg">
            Statistics-based choice
          </p>
        </li>

        <li className="flex items-center bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">
            🚪
          </div>
          <p className="ml-6 text-gray-700 font-medium text-lg">
            Door-to-door service
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TreatmentAdvisor;
