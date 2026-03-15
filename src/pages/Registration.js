import React from "react";

const Registration = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        WEO Volunteer Registration
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Join the World Environment Organization and be part of initiatives
        that protect nature and create a sustainable future.
      </p>

      <div className="w-full rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdQxQLem15qn3qw6yhmMPYIhMPjLTf5kg3lxXXwlVGYiqOemw/viewform?embedded=true"
          width="100%"
          height="1400"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="WEO Registration Form"
        >
          Loading…
        </iframe>
      </div>

    </div>
  );
};

export default Registration;