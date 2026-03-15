import React from "react";

const EnvironmentSurvey = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Environment Awareness Survey
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Help us understand environmental awareness and take action for a greener future.
      </p>

      <div className="w-full rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfRGJedKO3M8LgH4RCXnZ4TmeSgQb61DImKU2SFKmvIEHueoA/viewform?embedded=true"
          width="100%"
          height="1400"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Environment Survey"
        >
          Loading…
        </iframe>
      </div>

    </div>
  );
};

export default EnvironmentSurvey;