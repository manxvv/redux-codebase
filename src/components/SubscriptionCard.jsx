import React from "react";

const SubscriptionCard = () => {
  return (
    <div className="mt-5 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
     
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
        Premium Tiers: 
        </h2>
                            <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
                            Unlocking Advanced Career Development                            </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pro Tier */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-2 border-blue-500 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Pro Tier</h3>
            <p className="text-gray-700 text-lg font-bold mb-2">$20/month</p>
            <p className="text-gray-500 mb-4">(21 Sessions)</p>
            <ul className="text-gray-700 space-y-2">
              <li>✅ Access to personalized mentorship sessions</li>
              <li>✅ Tailored career guidance from industry experts</li>
              <li>✅ Monthly skill-building workshops</li>
            </ul>
            <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">
              Choose Pro
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-2 border-purple-500 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Premium Tier</h3>
            <p className="text-gray-700 text-lg font-bold mb-2">$50/month</p>
            <p className="text-gray-500 mb-4">(21 Sessions)</p>
            <ul className="text-gray-700 space-y-2">
              <li>✅ All Pro features plus exclusive certifications</li>
              <li>✅ Weekly one-on-one coaching sessions</li>
              <li>✅ Priority access to high-profile networking events</li>
            </ul>
            <button className="mt-6 w-full py-2 bg-purple-500 text-white rounded-md font-medium hover:bg-purple-600">
              Choose Premium
            </button>
          </div>
        </div>

        {/* ROI Section */}
        {/* <div className="bg-gray-50 mt-10 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">ROI for Users</h3>
          <ul className="text-gray-700 space-y-2">
            <li>🚀 Accelerated career progression</li>
            <li>🚀 Enhanced soft skills valued by employers</li>
            <li>🚀 Verified credentials for professional profiles</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default SubscriptionCard;
