import React from "react";
import { FaClock, FaRocket, FaVideo } from "react-icons/fa6";
import { MdContactPage, MdEmail } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";

const FeatureCard = ({ icon, title, description }) =>
    
    
    (
      
  <div className="flex flex-col items-start bg-white p-6 shadow-xl rounded-2xl transition-transform transform hover:scale-105 border border-gray-100">
    
    
    <div className="text-blue-400 text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const FeaturesGrid = () => {

  const features = [
    {
      icon: <FaVideo />,
      title: "1:1 Live Session",
      description: "Personalized one-on-one sessions to track your progress.",
    },
    {
      icon: <MdEmail />
      ,
      title: "Unlimited Chat with Mentor",
      description: "Get advice anytime through instant mentor chats.",
    },
    {
      icon: <MdContactPage />
      ,
      title: "Task & Curated Resources",
      description: "Exclusive resources tailored for your growth.",
    },
    {
      icon: <FaClock />
      ,
      title: "Regular Followups",
      description: "Stay on track with consistent mentor follow-ups.",
    },
    {
      icon: <FaRocket />

      ,
      title: "Job Referrals",
      description: "Get access to top company referrals.",
    },
    {
      icon: <PiCertificateFill />
      ,
      title: "Certified",
      description: "Earn verified credentials upon completion.",
    },
  ];
  

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 text-center mb-12">
        </h2>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
        Features That <h2 className="text-blue-600 text-2xl">Elevate You and Boost Career 
          </h2>
        </h2>
                           
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
